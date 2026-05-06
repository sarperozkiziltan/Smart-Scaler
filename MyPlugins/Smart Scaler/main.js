import CoreService from "LensStudio:CoreService";

export class SmartScaler extends CoreService {
  static descriptor() {
    return {
      id: 'com.sarperozkiziltan.smartscaler',
      name: 'Smart Scaler',
      description: 'A workflow tool that automatically calculates and applies ScreenTransform bounds for Screen Images based on their texture width and a 720px canvas.',
      dependencies: [Editor.IContextActionRegistry, Editor.Model.IModel],
    };
  }

  constructor(pluginSystem) {
    super(pluginSystem);
    this.guards = [];
    this.model = null;
  }

  start() {
    console.log('Smart Scaler: Starting plugin...');
    this.model = this.pluginSystem.findInterface(Editor.Model.IModel);
    const contextActionRegistry = this.pluginSystem.findInterface(Editor.IContextActionRegistry);

    this.guards.push(
      contextActionRegistry.registerAction((context) => {
        const action = new Editor.ContextAction();
        action.id = 'com.sarperozkiziltan.smartscaler.apply';
        action.caption = 'Smart Scale';
        action.description = 'Set ScreenTransform anchors based on texture width / 720';

        // Determine valid scene-object targets (if any). Asset-browser
        // contexts and other non-scene contexts produce an empty list.
        let sceneObjects = [];
        try {
          if (
            context.selection &&
            context.selection.length > 0 &&
            !('asset' in context.selection[0]) &&
            !('path' in context.selection[0]) &&
            typeof context.selection[0].getComponent === 'function'
          ) {
            sceneObjects = context.selection.filter(
              obj => typeof obj.getComponent === 'function'
            );
          }
        } catch (e) {
          sceneObjects = [];
        }

        action.apply = () => {
          if (sceneObjects.length === 0) {
            console.log('Smart Scaler: Not applicable — please right-click a scene object.');
            return;
          }

          const assets = this.model.project.assetManager.assets;
          let applied = 0;

          for (const sceneObject of sceneObjects) {
            const screenTransform = sceneObject.getComponent('ScreenTransform');
            if (!screenTransform) {
              console.log(`Smart Scaler: "${sceneObject.name}" has no ScreenTransform — skipped.`);
              continue;
            }

            const image = sceneObject.getComponent('Image');
            if (!image) {
              console.log(`Smart Scaler: "${sceneObject.name}" has no Image component — skipped.`);
              continue;
            }

            const material = image.mainMaterial;
            if (!material || !material.passInfos || material.passInfos.length === 0) {
              console.log(`Smart Scaler: "${sceneObject.name}" has no material or passes — skipped.`);
              continue;
            }

            const texParam = material.passInfos[0]['baseTex'];
            if (!texParam) {
              console.log(`Smart Scaler: "${sceneObject.name}" has no baseTex — skipped.`);
              continue;
            }

            const textureAsset = assets.find(a => String(a.id) === String(texParam.id));
            if (!textureAsset) {
              console.log(`Smart Scaler: "${sceneObject.name}" texture asset not found — skipped.`);
              continue;
            }

            const width = textureAsset.fileInfo ? textureAsset.fileInfo.width : undefined;
            if (!width) {
              console.log(`Smart Scaler: "${sceneObject.name}" texture width unreadable — skipped.`);
              continue;
            }

            const value = width / 720;
            const anchor = screenTransform.anchor;
            anchor.left = -value;
            anchor.right = value;
            screenTransform.anchor = anchor;

            console.log(`Smart Scaler: Applied — "${sceneObject.name}", texture="${textureAsset.name}", width=${width}px, left=${(-value).toFixed(4)}, right=${value.toFixed(4)}`);
            applied++;
          }

          console.log(`Smart Scaler: Done — ${applied}/${sceneObjects.length} object(s) updated.`);
        };

        return action;
      })
    );
  }

  stop() {
    this.guards = [];
    this.model = null;
  }
}
