/**
 * @module Editor Scripting
 * @version 5.20.0
 * For Snapchat Version: 13.86
*/
interface ComponentNameMap {
    "AnimationPlayer": Editor.Components.AnimationPlayer;
    "AudioComponent": Editor.Components.AudioComponent;
    "BaseMeshVisual": Editor.Components.BaseMeshVisual;
    "BodyComponent": Editor.Components.Physics.BodyComponent;
    "Camera": Editor.Components.Camera;
    "Canvas": Editor.Components.Canvas;
    "ClothVisual": Editor.Components.ClothVisual;
    "ColliderComponent": Editor.Components.Physics.ColliderComponent;
    "Component": Editor.Components.Component;
    "ConstraintComponent": Editor.Components.Physics.ConstraintComponent;
    "DeviceTracking": Editor.Components.DeviceTracking;
    "EyeColorVisual": Editor.Components.EyeColorVisual;
    "FaceInsetVisual": Editor.Components.FaceInsetVisual;
    "FaceMaskVisual": Editor.Components.FaceMaskVisual;
    "FaceStretchVisual": Editor.Components.FaceStretchVisual;
    "GaussianSplattingVisual": Editor.Components.GaussianSplattingVisual;
    "HairVisual": Editor.Components.HairVisual;
    "Head": Editor.Components.Head;
    "Image": Editor.Components.Image;
    "InteractionComponent": Editor.Components.InteractionComponent;
    "LightSource": Editor.Components.LightSource;
    "LiquifyVisual": Editor.Components.LiquifyVisual;
    "LocatedAtComponent": Editor.Components.LocatedAtComponent;
    "LookAtComponent": Editor.Components.LookAtComponent;
    "ManipulateComponent": Editor.Components.ManipulateComponent;
    "MarkerTrackingComponent": Editor.Components.MarkerTrackingComponent;
    "MaskingComponent": Editor.Components.MaskingComponent;
    "MaterialMeshVisual": Editor.Components.MaterialMeshVisual;
    "ObjectTracking": Editor.Components.ObjectTracking;
    "ObjectTracking3D": Editor.Components.ObjectTracking3D;
    "PinToMeshComponent": Editor.Components.PinToMeshComponent;
    "PostEffectVisual": Editor.Components.PostEffectVisual;
    "RectangleSetter": Editor.Components.RectangleSetter;
    "RenderLayerOwner": Editor.Components.RenderLayerOwner;
    "RenderMeshVisual": Editor.Components.RenderMeshVisual;
    "RetouchVisual": Editor.Components.RetouchVisual;
    "ScreenRegionComponent": Editor.Components.ScreenRegionComponent;
    "ScreenTransform": Editor.Components.ScreenTransform;
    "ScriptComponent": Editor.Components.ScriptComponent;
    "Skin": Editor.Components.Skin;
    "Text": Editor.Components.Text;
    "Text3D": Editor.Components.Text3D;
    "Visual": Editor.Components.Visual;
    "WorldComponent": Editor.Components.Physics.WorldComponent;
}

/**
* Remove the interval calls.
*/
declare function clearInterval(timeout: Timeout): void

/**
* Cancels the timeout.
*/
declare function clearTimeout(timeout: Timeout): void

/**
* Dynamically creates a function object from a string of JavaScript code. This allows you to generate and execute functions at runtime.
*/
declare function createFunctionObject(code: string, funcName: string): any

/**
* Repeatedly call `callback` every `delayMs` milliseconds.
*/
declare function setInterval(callback: () => void, delayMs: number): Timeout

/**
* Call `callback` after `delayMs` milliseconds.
*/
declare function setTimeout(callback: () => void, delayMs: number): Timeout

declare namespace global {
    /**
    * Provides access to the plugin's {@link SecureLocalStorage}.
    */
    let secureLocalStorage: SecureLocalStorage
    
}

/**
* Utility class for encoding and decoding data in base64 format.
*/
declare class Base64 {
    
    /** @hidden */
    protected constructor()
    
    /**
    * Decode a base64 string to a Uint8Array.
    */
    static decode(value: string): Uint8Array
    
    /**
    * Encode a Uint8Array to a base64 string.
    */
    static encode(data: Uint8Array): string
    
    /**
    * Encode a string to a base64 string.
    */
    static encodeString(str: string): string
    
}

/**
* Base class for plugin descriptors containing metadata and interface requirements.
*/
declare class BaseDescriptor extends IPluginDescriptor {
    
    /** @hidden */
    protected constructor()
    
    /**
    * Array of interface IDs that this plugin requires to function.
    */
    dependencies: Editor.InterfaceId[]
    
    /**
    * Human-readable description of the plugin shown in the plugin manager.
    */
    description: string
    
    /**
    * Unique identifier for the plugin, typically in reverse domain notation.
    */
    id: string
    
    /**
    * Array of interface IDs that this plugin provides or implements.
    */
    interfaces: Editor.InterfaceId[]
    
    /**
    * Display name of the plugin.
    */
    name: string
    
}

/**
* Output logging utilities for plugin scripts.
*/
declare class console {
    
    /** @hidden */
    protected constructor()
    
    /**
    * Log debug-level messages.
    */
    static debug(...data: any[]): void
    
    /**
    * Log error-level messages.
    */
    static error(...data: any[]): void
    
    /**
    * Log info-level messages.
    */
    static info(...data: any[]): void
    
    /**
    * Log general messages.
    */
    static log(...data: any[]): void
    
    /**
    * Log stack trace.
    */
    static trace(...data: any[]): void
    
    /**
    * Log warning-level messages.
    */
    static warn(...data: any[]): void
    
    static None: console.Category
    
    static User: console.Category
    
}

declare namespace console {
    /**
    * Enum-like type for log categories (console.None, console.User).
    */
    class Category {
        
        /** @hidden */
        protected constructor()
        
    }

}

/**
* Namespace that provides access to the components of Lens Studio.

* @example
* ```js
* // Get the model component
* const model = this.pluginSystem.findInterface(Editor.Model.IModel);
* // Get the AssetManager in the current project (e.g. to import file).
* const assetManager = model.project.assetManager;
* ```
*/
declare class Editor {
    
    /** @hidden */
    protected constructor()
    
    /**
    * Create a new animation clip for the given scene.
    */
    static createAnimationClip(scene: Editor.Assets.Scene): Editor.AnimationClip
    
    /**
    * Check if a native object is null or destroyed.
    */
    static isNull(object: any): boolean
    
}

declare namespace Editor {
    /**
    * Access AI chat functionality and message history.
    */
    class Ai {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    namespace Ai {
        /**
        * Manage AI chat history and sessions.
        */
        class Storage {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Alignment {
        /**
        * The options for horizontal alignment, for example when using {@link Editor.Components.BaseMeshVisual}
        */
        enum Horizontal {
            /**
            * Left horizontal alignment.
            */
            Left,
            /**
            * Center horizontal alignment.
            */
            Center,
            /**
            * Right horizontal alignment.
            */
            Right
        }
    
    }

}

declare namespace Editor {
    namespace Alignment {
        /**
        * The options for vertical alignment, for example when using {@link Editor.Components.BaseMeshVisual}
        */
        enum Vertical {
            /**
            * Aligns content to the bottom.
            */
            Bottom,
            /**
            * Aligns content to the center vertically.
            */
            Center,
            /**
            * Aligns content to the top.
            */
            Top
        }
    
    }

}

declare namespace Editor {
    /**
    * Represents an animation clip instance with playback configuration.
    */
    class AnimationClip extends Editor.Model.EntityStructure {
        
        /** @hidden */
        protected constructor()
        
        /**
        * The animation asset this clip references.
        */
        animation: Editor.Assets.AnimationAsset
        
        /**
        * Start frame of the clip.
        */
        begin: number
        
        /**
        * How this clip blends with other layers.
        */
        blendMode: Editor.AnimationLayerBlendMode
        
        /**
        * Whether this clip is disabled.
        */
        disabled: boolean
        
        /**
        * End frame of the clip.
        */
        end: number
        
        /**
        * Name of the clip.
        */
        name: string
        
        /**
        * Determines playback behavior (loop, clamp, etc).
        */
        playbackMode: Editor.PlaybackMode
        
        /**
        * Multiplier for playback speed.
        */
        playbackSpeed: number
        
        /**
        * Whether playback is reversed.
        */
        reversed: boolean
        
        /**
        * How the clip scales to fit the frame range.
        */
        scaleMode: Editor.AnimationLayerScaleMode
        
        /**
        * Blend weight of this clip (0-1 range).
        */
        weight: number
        
        static getMeta(): Editor.Model.Meta
        
        static getTypeName(): string
        
    }

}

declare namespace Editor {
    /**
    * Enum defining how animation layers blend with the base animation.
    */
    enum AnimationLayerBlendMode {
        /**
        * Base blending mode that replaces the animation.
        */
        Default,
        /**
        * Additive blending mode that adds the animation on top of existing animations.
        */
        Additive
    }

}

declare namespace Editor {
    /**
    * Defines how animation layer scaling is applied to the base animation.
    */
    enum AnimationLayerScaleMode {
        /**
        * Multiplies the layer scale with the base animation scale.
        */
        Multiply,
        /**
        * Adds the layer scale to the base animation scale.
        */
        Additive
    }

}

declare namespace Editor {
    /**
    * Namespace containing all asset types for Lens Studio projects.
    */
    class Assets {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Represents an animation asset with playback timing information.
        */
        class AnimationAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Total duration of the animation in seconds.
            
            * @readonly
            */
            duration: number
            
            /**
            * Frames per second of the animation.
            
            * @readonly
            */
            fps: number
            
            /**
            * Total number of frames in the animation.
            
            * @readonly
            */
            frames: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * The aliasing mode of {@link Editor.Assets.RenderTarget}.
        */
        enum AntialiasingMode {
            /**
            * Whether no aliasing should happen. 
            */
            Disabled,
            /**
            * Whether MSAA should be used.
            */
            MSAA,
            /**
            * Whether TAA (Temporal Anti-Aliasing) should be used.
            */
            TAA
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Enum for antialiasing quality levels.
        */
        enum AntialiasingQuality {
            /**
            * Lowest antialiasing quality.
            */
            Low,
            /**
            * Medium antialiasing quality.
            */
            Medium,
            /**
            * High antialiasing quality.
            */
            High,
            /**
            * Default antialiasing quality.
            */
            Default,
            /**
            * Highest antialiasing quality.
            */
            Ultra
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Represents an imported asset with cached file and metadata.
        */
        class Asset extends Editor.Model.Entity {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Path to the cached asset file.
            
            * @readonly
            */
            cacheFile: Editor.Path
            
            /**
            * Import metadata for the asset.
            
            * @readonly
            */
            fileMeta: Editor.Model.AssetImportMetadata
            
            /**
            * The name of the asset.
            
            * @readonly
            */
            name: string
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class AssetCompressionSettings extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Represents an audio track asset.
        */
        class AudioTrackAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * The blendmode of a {@link Editor.Assets.PassInfo}.
        */
        enum BlendMode {
            /**
            * No blending applied.
            */
            Disabled,
            /**
            * Standard alpha blending.
            */
            Normal,
            /**
            * Multiplies colors, darkening the result.
            */
            Multiply,
            /**
            * Legacy multiply blend mode.
            */
            MultiplyLegacy,
            /**
            * Adds colors together, brightening the result.
            */
            Add,
            /**
            * Legacy additive blend mode.
            */
            AddLegacy,
            /**
            * Blends with premultiplied alpha.
            */
            PremultipliedAlpha,
            /**
            * Glass-like transparency effect.
            */
            Glass,
            /**
            * Colored glass transparency effect.
            */
            ColoredGlass,
            /**
            * Binary alpha testing without blending.
            */
            AlphaTest,
            /**
            * Converts alpha to coverage for anti-aliasing.
            */
            AlphaToCoverage,
            /**
            * Inverts multiply, brightening overall.
            */
            Screen,
            /**
            * Selects minimum color channel values.
            */
            Min,
            /**
            * Selects maximum color channel values.
            */
            Max,
            /**
            * Auto-converted premultiplied alpha blending.
            */
            PremultipliedAlphaAuto,
            /**
            * Custom blend mode.
            */
            Custom,
            /**
            * Selects darker colors only.
            */
            Darken,
            /**
            * Darkens by increasing contrast.
            */
            ColorBurn,
            /**
            * Selects lighter colors only.
            */
            Lighten,
            /**
            * Lightens by decreasing contrast.
            */
            ColorDodge,
            /**
            * Combines multiply and screen based on color.
            */
            Overlay,
            /**
            * Soft overlay effect.
            */
            SoftLight,
            /**
            * Hard overlay effect.
            */
            HardLight,
            /**
            * Intense contrast between lighten and darken.
            */
            VividLight,
            /**
            * Linear version of vivid light.
            */
            LinearLight,
            /**
            * Pins colors to lighten or darken based on blend.
            */
            PinLight,
            /**
            * Posterizes to primary colors.
            */
            HardMix,
            /**
            * Subtracts colors to show differences.
            */
            Diff,
            /**
            * Similar to difference with lower contrast.
            */
            Exclusion,
            /**
            * Subtracts blend color from base.
            */
            Subtract,
            /**
            * Blends using hue of blend color.
            */
            Hue,
            /**
            * Blends using saturation of blend color.
            */
            Saturation,
            /**
            * Blends using hue and saturation of blend color.
            */
            Color,
            /**
            * Blends using luminosity of blend color.
            */
            Luminosity,
            /**
            * Averages color values.
            */
            Average,
            /**
            * Inverted difference blend.
            */
            Negation,
            /**
            * Hard reflection effect.
            */
            HardReflect,
            /**
            * Hard glow effect.
            */
            HardGlow,
            /**
            * Hard phoenix effect.
            */
            HardPhoenix,
            /**
            * Physically-based realistic blending.
            */
            Realistic,
            /**
            * Divides base by blend color.
            */
            Division,
            /**
            * Brightens based on blend color.
            */
            Bright,
            /**
            * For grayscale blending.
            */
            Forgray,
            /**
            * Inverse of bright mode.
            */
            NotBright,
            /**
            * Intensifies colors.
            */
            Intense
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * 3D body tracking asset with optional hand tracking support.
        */
        class BodyTracking3DAsset extends Editor.Assets.Object3DAsset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Enable or disable hand tracking for this asset.
            */
            handTrackingEnabled: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * How a Render Target should be cleared every frame {@link Editor.Assets.RenderTarget}.
        */
        enum ClearColorOption {
            /**
            * The Render Target is not cleared at all.
            */
            None,
            /**
            * The last texture in the render pipeline will be used. 
            */
            BackgroundTexture,
            /**
            * The specified color will be used for every pixel at the beginning of the frame.
            */
            CustomColor,
            /**
            * The specified texture will replace the Render Target at the beginning of the frame. For example, the texture might be the {@link Editor.Assets.DeviceCameraTexture}.
            */
            CustomTexture,
            /**
            * Legacy option for enabling clear color behavior.
            */
            LegacyClearColorEnable
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Enum that specifies which faces of a mesh to cull during rendering.
        */
        enum CullMode {
            /**
            * Cull the front face of a mesh.
            */
            Front,
            /**
            * Cull the back face of a mesh.
            */
            Back,
            /**
            * Cull both the fron and back face of a mesh.
            */
            FrontAndBack
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Asset representing a custom code node in a visual graph.
        */
        class CustomCodeNodeAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * The depth buffer strategy of a {@link Editor.Assets.RenderTarget}.
        */
        enum DepthBufferStrategy {
            /**
            * Automatically determines whether to use a depth buffer based on render target usage.
            */
            Auto,
            /**
            * Disables the depth buffer for this render target.
            */
            ForceOff,
            /**
            * Enables the depth buffer for this render target.
            */
            ForceOn
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * How a {@link Editor.Assets.PassInfo} should determine its depth compared to others.
        */
        enum DepthFunction {
            /**
            * Never passes the depth test.
            */
            Never,
            /**
            * Passes if fragment depth is less than stored depth.
            */
            Less,
            /**
            * Passes if fragment depth equals stored depth.
            */
            Equal,
            /**
            * Passes if fragment depth is less than or equal to stored depth.
            */
            LessEqual,
            /**
            * Passes if fragment depth is greater than stored depth.
            */
            Greater,
            /**
            * Passes if fragment depth does not equal stored depth.
            */
            NotEqual,
            /**
            * Passes if fragment depth is greater than or equal to stored depth.
            */
            GreaterEqual,
            /**
            * Always passes the depth test.
            */
            Always
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides the texture from the camera feed. Import with {@link Editor.Model.AssetManager#createNativeAsset}.
        */
        class DeviceCameraTexture extends Editor.Assets.Texture {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class DracoCompressionSettings extends Editor.Assets.FileCompressionSettings {
            
            /** @hidden */
            protected constructor()
            
            colorBits: number
            
            compressionLevel: number
            
            normalBits: number
            
            positionBits: number
            
            texcoordBits: number
            
            static create(scene: Editor.Assets.Scene): Editor.Assets.DracoCompressionSettings
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides a cropped region of the input texture, calculated based on face position. Import with {@link Editor.Model.AssetManager#createNativeAsset}.   Learn more in {@link LensScripting.FaceCropTextureProvider}
        
        */
        class FaceCropTexture extends Editor.Assets.Texture {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Weight blending the crop between face center and mouth.
            */
            faceCenterMouthWeight: number
            
            /**
            * Index of the face to crop from the input texture.
            */
            faceIndex: number
            
            /**
            * Source texture containing the face to crop.
            */
            inputTexture: Editor.Assets.Texture
            
            /**
            * Size multiplier for the cropped face region.
            */
            scale: vec2
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides a 3D mesh of the user's face. Import with {@link Editor.Model.AssetManager#createNativeAsset}.   Learn more in the Face Mesh guide.
        */
        class FaceMesh extends Editor.Assets.RenderMesh {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Enable ear geometry rendering.
            */
            earGeometryEnabled: boolean
            
            /**
            * Scale factor applied to facial expressions.
            */
            expressionMultiplier: number
            
            /**
            * Custom mesh to replace the default face mesh.
            */
            externalMesh: Editor.Assets.FileMesh
            
            /**
            * UV vertex attribute mapping for the external mesh.
            */
            externalMeshMapUV: Editor.Assets.VertexAttribute
            
            /**
            * Scale factor for the external mesh.
            */
            externalScale: number
            
            /**
            * Enable eye corner geometry rendering.
            */
            eyeCornerGeometryEnabled: boolean
            
            /**
            * Enable eye geometry rendering.
            */
            eyeGeometryEnabled: boolean
            
            /**
            * Enable face geometry rendering.
            */
            faceGeometryEnabled: boolean
            
            /**
            * Index of the tracked face this mesh represents.
            */
            faceIndex: number
            
            /**
            * Enable mouth geometry rendering.
            */
            mouthGeometryEnabled: boolean
            
            /**
            * Enable skull geometry rendering.
            */
            skullGeometryEnabled: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class FileCompressionSettings extends Editor.Assets.AssetCompressionSettings {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * An asset for 3D meshes.
        */
        class FileMesh extends Editor.Assets.RenderMesh {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            info: Editor.Assets.MeshInfo
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * An asset for textures.
        */
        class FileTexture extends Editor.Assets.Texture {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Holds metadata about the texture file.
            
            * @readonly
            */
            fileInfo: Editor.Assets.FileTextureInfo
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A 2D texture array asset loaded from file containing multiple 2D texture layers.
        */
        class FileTexture2DArray extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * File information for the texture array asset.
            
            * @readonly
            */
            fileInfo: Editor.Assets.FileTextureInfo3D
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * 3D texture asset imported from an external file.
        */
        class FileTexture3D extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Metadata and properties of the imported 3D texture file.
            
            * @readonly
            */
            fileInfo: Editor.Assets.FileTextureInfo3D
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Cubemap texture asset with per-face texture information.
        */
        class FileTextureCubemap extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Texture information for the cubemap's faces.
            
            * @readonly
            */
            fileInfo: Editor.Assets.FileTextureInfo3D
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Holds texture file dimensions.
        */
        class FileTextureInfo extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Texture height in pixels.
            
            * @readonly
            */
            height: number
            
            /**
            * Texture width in pixels.
            
            * @readonly
            */
            width: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * 3D texture file information including depth.
        */
        class FileTextureInfo3D extends Editor.Assets.FileTextureInfo {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Depth dimension of the 3D texture in pixels.
            
            * @readonly
            */
            depth: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * How a texture should be sampled. 
        */
        enum FilteringMode {
            /**
            * Point sampling with no interpolation.
            */
            Nearest,
            /**
            * Linear interpolation between adjacent pixels.
            */
            Bilinear,
            /**
            * Linear interpolation with mipmap support.
            */
            Trilinear
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Font asset for text rendering.
        */
        class Font extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class FontCollection extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class FontFamily extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * The same entity as in Lens Scripting.  @see {link Editor.Assets.PassInfo}. 
        */
        enum FrustumCullMode {
            /**
            * Automatically determine frustum culling behavior.
            */
            Auto,
            /**
            * Extend frustum bounds beyond automatic culling.
            */
            Extend
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Asset containing Gaussian splats for use with GaussianSplattingVisual.
        */
        class GaussianSplattingAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Flips X and Y axis of the asset.
            */
            flipXY: boolean
            
            /**
            * Pivot point of the asset as a 3D vector.
            */
            pivot: vec3
            
            /**
            * Places pivot of the asset to the center of its bounding box.
            */
            recenter: boolean
            
            /**
            * Applies a scale multiplier to the asset's transform.
            */
            scale: number
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Native asset providing data for hair rendering.
        */
        class HairDataAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * 3D hand tracking asset for hand pose and gesture recognition.
        */
        class HandTracking3DAsset extends Editor.Assets.Object3DAsset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Which hand (left or right) this asset represents.
            */
            handType: Editor.Assets.HandTracking3DHandType
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Used with {Editor.Assets.HandTracking3DAsset}.
        */
        enum HandTracking3DHandType {
            /**
            * Right hand.
            */
            Right,
            /**
            * Left hand.
            */
            Left
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A {@link LensScripting.MarkerAsset} for use with {@link Editor.Components.MarkerTrackingComponent}
        
        * @example
        * ```js
        * // Create the asset
        * const imageMarker = assetManager.createNativeAsset('ImageMarker', 'Image Marker [EDIT_ME]', destination);
        
        * // Ask user for the file they want to use as image marker
        * import * as Ui from 'LensStudio:Ui';
        * const gui = pluginSystem.findInterface(Ui.IGui);
        * const filename = gui.dialogs.selectFileToOpen({ 'caption': 'Select image for the marker', 'filter': '*.png *.jpeg *.jpg' }, '')
        
        * // Import the image, and use it as the marker's texture
        * const importedTextureMeta = await assetManager.importExternalFileAsync(filename, destination, Editor.Model.ResultType.Auto);
        * imageMarker.texture = importedTextureMeta.primary;
        * ```
        */
        class ImageMarker extends Editor.Assets.MarkerAsset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The texture used as the image marker.
            */
            texture: Editor.Assets.FileTexture
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A script asset that is written in JavaScript. 
        
        * @example
        * #script-assetshttps://docs.snap.com/lens-studio/5.0.0/essential-skills/scripting/scripting-introduction
        */
        class JavaScriptAsset extends Editor.Assets.ScriptAsset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Read-only information about the script's input parameters.
            
            * @readonly
            */
            scriptInputInfo: any
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Asset wrapping JSON data.
        */
        class JsonAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Licensed audio track asset with metadata and runtime source paths.
        */
        class LicensedAudioTrack extends Editor.Assets.AudioTrackAsset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Name of the track's artist.
            */
            artistName: string
            
            /**
            * Whether the track is bundled with the project.
            */
            bundled: boolean
            
            /**
            * Runtime path to the track's beats data.
            
            * @readonly
            */
            runtimeSourceBeatsPath: Editor.Path
            
            /**
            * Runtime path to the track's lyrics data.
            
            * @readonly
            */
            runtimeSourceLyricsPath: Editor.Path
            
            /**
            * Runtime path to the track's audio file.
            
            * @readonly
            */
            runtimeSourcePath: Editor.Path
            
            trackId: string
            
            trackName: string
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Asset representing a named location with an identifier and type.
        */
        class LocationAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Human-readable name for the location.
            */
            displayName: string
            
            /**
            * Unique identifier for the location.
            */
            locationId: string
            
            /**
            * Type classification of the location.
            */
            locationType: Editor.Assets.LocationType
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides data for {@link LensScripting.LocationAsset}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        
        */
        class LocationMesh extends Editor.Assets.RenderMesh {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The LocationAsset associated with this mesh.
            */
            location: Editor.Assets.LocationAsset
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Used with {Editor.Assets.Location}.
        */
        enum LocationType {
            Snap,
            Custom,
            World,
            Tile,
            RelativeTile,
            Proxy,
            NativeAR
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Native asset for markdown content.
        */
        class MarkdownAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Base asset for marker tracking with configurable height.
        */
        class MarkerAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Height of the marker in units.
            */
            height: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Material asset defining rendering passes and their properties.
        */
        class Material extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Add a pass to the material and return its PassInfo.
            */
            addPass(pass: Editor.Assets.Pass): Editor.Assets.PassInfo
            
            /**
            * Array of pass information objects for each rendering pass.
            */
            passInfos: Editor.Assets.PassInfo[]
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class MeshInfo extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * @readonly
            */
            aabbSize: vec3
            
            /**
            * @readonly
            */
            blendshapes: string[]
            
            /**
            * @readonly
            */
            joints: number
            
            /**
            * @readonly
            */
            triangles: number
            
            /**
            * @readonly
            */
            vertices: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Machine learning model asset.
        
        * @beta
        */
        class MLAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Enum for multisample anti-aliasing strategy selection.
        */
        enum MSAAStrategy {
            /**
            * Apply MSAA with default settings.
            */
            Default,
            /**
            * Apply MSAA only when necessary for quality.
            */
            OnlyWhenRequired
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Metadata descriptor for a native package asset.
        */
        class NativePackageDescriptor extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Array of asset files included in the package.
            */
            attachments: Editor.Assets.Asset[]
            
            /**
            * Unique identifier for the package component.
            
            * @readonly
            */
            componentId: import('LensStudio:Uuid').Uuid
            
            /**
            * Human-readable description of the package.
            */
            description: string
            
            /**
            * Unique identifier for the package export.
            
            * @readonly
            */
            exportId: import('LensStudio:Uuid').Uuid
            
            /**
            * Visual icon representing the package.
            */
            icon: Editor.Icon
            
            /**
            * Name of the package.
            
            * @readonly
            */
            packageName: string
            
            /**
            * Documentation text for the package.
            */
            readMe: Editor.Assets.MarkdownAsset
            
            /**
            * Script executed during package setup.
            */
            setupScript: Editor.Assets.SetupScript
            
            /**
            * Keywords or categories for package discovery.
            */
            tags: string[]
            
            /**
            * Version number of the package.
            */
            version: Editor.Assets.Version
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Base asset type for 3D object models.
        */
        class Object3DAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Base class for entities which has object and component relationship such as {@link Editor.Assets.Scene} and {@link Editor.Assets.ObjectPrefab}.
        */
        class ObjectOwner extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Adds a scene object to the entity.
            */
            addSceneObject(parent: Editor.Model.SceneObject): Editor.Model.SceneObject
            
            /**
            * Creates a scene object to the entity.
            */
            createSceneObject(name: string): Editor.Model.SceneObject
            
            /**
            * Find components on the entity.
            */
            findComponents(entityType: string): Editor.Components.Component[]
            
            /**
            * Get the index of `object` within the list of all the root objects.
            */
            getRootObjectIndex(object: Editor.Model.SceneObject): number
            
            /**
            * Reparent the scene object to another scene object. You can use this to reparent objects to the root (i.e. pass in `null`).
            */
            reparentSceneObject(object: Editor.Model.SceneObject, newParent: Editor.Model.SceneObject, position?: number): void
            
            /**
            * A list of scene objects which is a direct child of this entity.
            
            * @readonly
            */
            rootSceneObjects: Editor.Model.SceneObject[]
            
            /**
            * A list of scene objects which is a child of this entity.
            
            * @readonly
            */
            sceneObjects: Editor.Model.SceneObject[]
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Reusable object template that can be instantiated in scenes.
        */
        class ObjectPrefab extends Editor.Assets.ObjectOwner {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Whether prefab assets load lazily on first use.
            */
            lazyLoading: boolean
            
            /**
            * List of scene objects instantiated from this prefab.
            
            * @readonly
            */
            prefabInstances: Editor.Model.SceneObject[]
            
            /**
            * Whether referenced assets are preserved when the prefab is modified.
            */
            retainAssets: boolean
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides information for object tracking texture. Learn more at {@link LensScripting.ObjectTrackingTextureProvider}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        
        
        * @example
        * ```js
        * const model = pluginSystem.findInterface(Editor.Model.IModel);
        * const assetManager = model.project.assetManager;
        
        * const destination new Editor.Path('');
        * const trackingType = Editor.Assets.ObjectTrackingTextureType.Nails;
        
        * const result = assetManager.createNativeAsset('ObjectTrackingTexture', 'Object Tracking Texture', destination);
        * result.trackingType = trackingType;
        * const objectTrackingTexParam = new Editor.Assets.TextureParameter(objectTrackingTexImage.id);
        * ```
        */
        class ObjectTrackingTexture extends Editor.Assets.Texture {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The type of object tracking this texture uses.
            */
            trackingType: Editor.Assets.ObjectTrackingTextureType
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Used with {@link Editor.Assets.ObjectTrackingTexture}.
        */
        enum ObjectTrackingTextureType {
            /**
            * Texture type for hand tracking.
            */
            Hand,
            /**
            * Texture type for nail tracking.
            */
            Nails
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Enum defining how asset packages can be unpacked and their transparency handling.
        */
        enum PackagePolicy {
            /**
            * Package cannot be unpacked.
            */
            CannotBeUnpacked,
            /**
            * Package can be unpacked.
            */
            CanBeUnpacked,
            /**
            * Package cannot be unpacked and uses transparent handling.
            */
            CannotBeUnpackedTransparent,
            /**
            * Package can be unpacked and uses transparent handling.
            */
            CanBeUnpackedTransparent
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Rendering pass asset used within a material.
        
        * @example
        * ```js
        * // Get access to the project's assetManager
        * const model = pluginSystem.findInterface(Editor.Model.IModel);
        * const assetManager = model.project.assetManager;
        
        * // Locate the shader pass we want to import
        * const resourceLoc = import.meta.resolve('Resources/myMesh.ss_graph');
        * const absGraphPath = new Editor.Path(resourceLoc);
        
        * // Import the shader pass
        * const meta = await assetManager.importExternalFileAsync(absolutePath, new Editor.Path(''), Editor.Model.ResultType.Packed);
        * // You can set meta.primary on a Material asset to use it.
        * ```
        */
        class Pass extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Defines a binding parameter for a render pass with metadata for UI presentation and value constraints.
        */
        class PassBinding {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Initial numeric value for the binding parameter.
            
            * @readonly
            */
            defaultValue?: number
            
            /**
            * Tooltip or help text displayed in the UI.
            
            * @readonly
            */
            hint: string
            
            /**
            * Human-readable name shown in the UI.
            
            * @readonly
            */
            label: string
            
            /**
            * Maximum allowed numeric value.
            
            * @readonly
            */
            max?: number
            
            /**
            * Minimum allowed numeric value.
            
            * @readonly
            */
            min?: number
            
            /**
            * Unique identifier for the binding parameter.
            
            * @readonly
            */
            name: string
            
            /**
            * Increment step size for numeric input.
            
            * @readonly
            */
            step?: number
            
            /**
            * Data type of the binding parameter.
            
            * @readonly
            */
            type: Editor.Assets.PassBindingType
            
            /**
            * Array of valid string values for enum-type bindings.
            
            * @readonly
            */
            values: Editor.Assets.PassBinding[]
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Enum defining types of bindings for render passes.
        */
        enum PassBindingType {
            /**
            * Invalid or uninitialized binding type.
            */
            Invalid,
            /**
            * Binding to a material property.
            */
            Property,
            /**
            * Binding to a shader define.
            */
            Define,
            /**
            * Binding to a define with selectable options.
            */
            DefineSelect,
            /**
            * Binding to a specific value within a define select.
            */
            DefineSelectValue,
            /**
            * Marks the end of a binding group.
            */
            GroupEnd
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * The {@link Editor.Assets.Pass} on a {@link Editor.Assets.Material}.
        
        * @example
        * ```js
        * // Import built in helpers
        * import * as Utils from 'LensStudio:Utils@1.0.js';
        
        * // In the plugin create function
        * const model = pluginSystem.findInterface(Editor.Model.IModel);
        * const assetManager = model.project.assetManager;
        * const destination = destination;
        
        * const material = const assetManager.createNativeAsset('Material', 'Material Name', destination);
        
        * const absGraphPath = new Editor.Path(params.graph_path);
        * const pass = await Utils.findOrCreateAsync(assetManager, absGraphPath, destination);
        * const passInfo = material.addPass(pass);
        * ```
        */
        class PassInfo extends Editor.Model.Entity {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Get the list of property names for this pass.
            */
            getPropertyNames(): string[]
            
            /**
            * Blending mode for color output.
            */
            blendMode: Editor.Assets.BlendMode
            
            /**
            * RGBA channel mask for color writes.
            */
            colorMask: vec4b
            
            /**
            * Face culling mode.
            */
            cullMode: Editor.Assets.CullMode
            
            /**
            * Preprocessor defines applied to shaders.
            */
            defines: string[]
            
            /**
            * Depth comparison function.
            */
            depthFunction: Editor.Assets.DepthFunction
            
            /**
            * Whether depth testing is enabled.
            */
            depthTest: boolean
            
            /**
            * Whether depth buffer writes are enabled.
            */
            depthWrite: boolean
            
            /**
            * Frustum culling mode.
            */
            frustumCulling: Editor.Assets.FrustumCullMode
            
            /**
            * Number of instances to render.
            */
            instanceCount: number
            
            /**
            * Whether polygon offset is enabled.
            */
            polygonOffset: vec2
            
            /**
            * Whether both front and back faces are rendered.
            */
            twoSided: boolean
            
            /**
            * UI metadata for this pass.
            
            * @readonly
            */
            uiData: Editor.Assets.PassUiData
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Shader pass UI configuration data.
        */
        class PassUiData extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Additional preprocessor defines for the shader pass.
            
            * @readonly
            */
            extraDefines: string[]
            
            /**
            * Bindings between shader parameters and material inputs.
            
            * @readonly
            */
            passBindings: Editor.Assets.PassBinding[]
            
            /**
            * Type of shader for this pass.
            
            * @readonly
            */
            shaderType: Editor.Assets.ShaderType
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class PerformanceCompressionSettings extends Editor.Assets.SizeCompressionSettings {
            
            /** @hidden */
            protected constructor()
            
            mipmap: boolean
            
            static create(scene: Editor.Assets.Scene): Editor.Assets.PerformanceCompressionSettings
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Namespace for physics-related assets and configuration.
        */
        class Physics {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        namespace Physics {
            /**
            * Defines collision filtering rules for physics queries and interactions.
            */
            class Filter extends Editor.Assets.Asset {
                
                /** @hidden */
                protected constructor()
                
                /**
                * Include dynamic rigid bodies in physics queries.
                */
                includeDynamic: boolean
                
                /**
                * Include intangible colliders in physics queries.
                */
                includeIntangible: boolean
                
                /**
                * Include static rigid bodies in physics queries.
                */
                includeStatic: boolean
                
                /**
                * Restrict queries to colliders on these layers only.
                */
                onlyLayers: Editor.Model.LayerSet
                
                /**
                * Exclude colliders on these layers from queries.
                */
                skipLayers: Editor.Model.LayerSet
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        namespace Physics {
            /**
            * Levelset-based collision shape asset.
            */
            class LevelsetColliderAsset extends Editor.Assets.Asset {
                
                /** @hidden */
                protected constructor()
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        namespace Physics {
            /**
            * Physics material asset defining bounce and friction properties.
            */
            class Matter extends Editor.Assets.Asset {
                
                /** @hidden */
                protected constructor()
                
                /**
                * Bounciness coefficient applied when the object is moving.
                */
                dynamicBounciness: number
                
                /**
                * Friction resistance opposing sliding motion.
                */
                friction: number
                
                /**
                * Friction resistance opposing rolling motion.
                */
                rollingFriction: number
                
                /**
                * Friction resistance opposing rotational motion.
                */
                spinningFriction: number
                
                /**
                * Bounciness coefficient applied when the object is stationary.
                */
                staticBounciness: number
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        namespace Physics {
            /**
            * Asset configuring global physics simulation settings.
            */
            class WorldSettingsAsset extends Editor.Assets.Asset {
                
                /** @hidden */
                protected constructor()
                
                /**
                * Return whether two physics layers can collide.
                */
                getLayersCollidable(layerNumberA: number, layerNumberB: number): boolean
                
                /**
                * Maximum velocity magnitude any rigid body can reach.
                */
                absoluteSpeedLimit: number
                
                /**
                * Default collision filter applied to new physics objects.
                */
                defaultFilter: Editor.Assets.Physics.Filter
                
                /**
                * Default material properties for new physics objects.
                */
                defaultMatter: Editor.Assets.Physics.Matter
                
                /**
                * Gravitational acceleration vector applied to the world.
                */
                gravity: vec3
                
                /**
                * Speed limit relative to an object's mass.
                */
                relativeSpeedLimit: number
                
                /**
                * Timestep frequency for physics calculations per second.
                */
                simulationRate: number
                
                /**
                * Time reduction per simulation step when slowdown is active.
                */
                slowDownStep: number
                
                /**
                * Duration to apply physics slowdown when triggered.
                */
                slowDownTime: number
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * ML asset backed by a remote device-dependent resource.
        
        * @beta
        */
        class RemoteMLAsset extends Editor.Assets.MLAsset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Identifier for the device-dependent asset on the remote resource.
            
            * @beta
            */
            deviceDependentAssetId: string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Reference to a remote asset identified by an asset ID.
        */
        class RemoteReferenceAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Unique identifier of the remote asset.
            */
            assetId: string
            
            /**
            * NEW
            */
            static getMeta(): Editor.Model.Meta
            
            /**
            * NEW
            */
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * 3D mesh asset for rendering geometry.
        
        * @example
        * ```js
        * // Get access to the project's assetManager
        * const model = pluginSystem.findInterface(Editor.Model.IModel);
        * const assetManager = model.project.assetManager;
        
        * // Locate the mesh we want to import
        * const resourceLoc = import.meta.resolve('Resources/myMesh.mesh');
        * const absGraphPath = new Editor.Path(resourceLoc);
        
        * // Import the mesh
        * const meta = await assetManager.importExternalFileAsync(absolutePath, new Editor.Path(''), Editor.Model.ResultType.Packed);
        * // You can set meta.primary on a Mesh Component to use it.
        * ```
        */
        class RenderMesh extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides the target for a camera to provide its output to. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        */
        class RenderTarget extends Editor.Assets.Texture {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Generate mipmap levels for the render target.
            */
            allocateMips: boolean
            
            /**
            * Antialiasing technique applied to the render target.
            */
            antialiasingMode: Editor.Assets.AntialiasingMode
            
            /**
            * Color to clear the render target with each frame.
            */
            clearColor: vec4
            
            /**
            * Determines when and how the render target is cleared.
            */
            clearColorOption: Editor.Assets.ClearColorOption
            
            /**
            * Depth buffer strategy used for rendering.
            */
            depthBuffer: Editor.Assets.DepthBufferStrategy
            
            /**
            * Source texture to render into the target.
            */
            inputTexture: Editor.Assets.Texture
            
            /**
            * Multisample antialiasing configuration.
            */
            msaaStrategy: Editor.Assets.MSAAStrategy
            
            /**
            * Pixel dimensions of the render target.
            */
            resolution: Editor.Size
            
            /**
            * Whether to use the screen resolution instead of an explicit one.
            */
            useScreenResolution: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Texture sampling configuration for filtering, mipmapping, and wrapping modes.
        */
        class Sampler {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Texture filtering method applied during sampling.
            */
            filteringMode: Editor.Assets.FilteringMode
            
            /**
            * Whether mipmaps are used for texture sampling.
            */
            mipmapsEnabled: boolean
            
            /**
            * Wrapping behavior for U texture coordinates.
            */
            wrapModeU: Editor.Assets.WrapMode
            
            /**
            * Wrapping behavior for V texture coordinates.
            */
            wrapModeV: Editor.Assets.WrapMode
            
            /**
            * Wrapping behavior for W texture coordinates.
            */
            wrapModeW: Editor.Assets.WrapMode
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * The entity which will be coverted into the Lens scene during project export. This scene will contan and own all objects and components in the Lens. This entity can be accessed via the current project’s `model.project.scene`.
        */
        class Scene extends Editor.Assets.ObjectOwner {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Instantiate a prefab as a child of `parent` under this entity.
            */
            instantiatePrefab(prefab: Editor.Assets.ObjectPrefab, parent: Editor.Model.SceneObject): Editor.Model.SceneObject
            
            /**
            * Render target for capture output.
            */
            captureTarget: Editor.Assets.RenderTarget
            
            /**
            * This list of layers that exists within this scene.
            
            * @readonly
            */
            layers: Editor.Model.Layers
            
            /**
            * Render target for live overlay rendering.
            */
            liveOverlayTarget: Editor.Assets.RenderTarget
            
            /**
            * Render target for live preview output.
            */
            liveTarget: Editor.Assets.RenderTarget
            
            /**
            * The camera that renders `renderOutput`.
            
            * @readonly
            */
            mainCamera: Editor.Components.Camera
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Script asset that can be attached to scene objects, containing inputs, attachments, and metadata.
        
        * @example
        * ```js
        * ///@input string stringToPrint = "Print this on Tap"
        * //@input int testIntProperty = 7
        * //@input int[] testIntArray = {1, 2, 3}
        
        * scriptAsset.stringToPrint = "New String";
        * scriptAsset.testIntProperty = 9;
        * scriptAsset.testIntArray = [4,5,6];
        
        * // set icon 
        * const buffer = Editor.FileSystem.readTextAll(path to svg file)
        * const newIcon = Editor.Icon.setIconFromSVGData(buffer)
        * scriptAsset.icon = newIcon;
        * // getIcon
        * const icon = scriptAsset.icon
        
        * // set description 
        * scriptAsset.description = "helloWorld"
        * // get description 
        * const desc = scriptAsset.description 
        
        * // hide input 
        * scriptAsset.setScriptInputHidden("myInputName", true);
        
        * // unhide input 
        * scriptAsset.setScriptInputHidden("myInputName", true);
        
        * // check visibility of input 
        * scriptAsset.isScriptInputHidden("myInputName");
        * ```
        */
        class ScriptAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Returns true if the script inpput is hidden from the scene.
            */
            isScriptInputHidden(inputName: string): boolean
            
            /**
            * Used when you'd like to hide inputs from users in the scene. 
            */
            setScriptInputHidden(inputName: string, hidden: boolean): void
            
            /**
            * Array of assets attached to this script.
            */
            attachments: Editor.Assets.Asset[]
            
            /**
            * Id associated with the script asset. 
            
            * @readonly
            */
            componentId: import('LensStudio:Uuid').Uuid
            
            /**
            * TypeScript declaration file path for this script's type definitions.
            */
            declarationFile: Editor.Assets.ScriptAsset
            
            /**
            * Description associated with the script asset 
            */
            description: string
            
            /**
            * Export id associated with the script asset. 
            
            * @readonly
            */
            exportId: import('LensStudio:Uuid').Uuid
            
            /**
            * Icon associated with the script asset. 
            */
            icon: Editor.Icon
            
            /**
            * Documentation string for this script.
            */
            readMe: Editor.Assets.MarkdownAsset
            
            /**
            * Array of tags categorizing this script.
            */
            tags: string[]
            
            /**
            * Version associated with the script asset.
            */
            version: Editor.Assets.Version
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Metadata about a script input parameter.
        */
        class ScriptInputInfo {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Properties of a custom input type.
            */
            customTypePropertiesInfo: any
            
            /**
            * Default value for the input parameter.
            */
            defaultValue: string
            
            /**
            * Whether the input is a custom type.
            */
            isCustomTypeInput: boolean
            
            /**
            * Data type of the input parameter.
            */
            type: string
            
            /**
            * UI configuration for the input parameter.
            */
            uiInfo: string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that provides information for segmentation texture. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        
        * @example
        * ```js
        * const model = pluginSystem.findInterface(Editor.Model.IModel);
        * const assetManager = model.project.assetManager;
        
        * const destination new Editor.Path('');
        * const segmentationType = Editor.Assets.SegmentationType.PortraitHair;
        
        * const result = assetManager.createNativeAsset('SegmentationTexture', 'Segmentation Texture', destination);
        * result.segmentationType = segmentationType;
        * ```
        */
        class SegmentationTexture extends Editor.Assets.Texture {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Softness amount applied to the segmentation mask edges.
            */
            feathering: number
            
            /**
            * Whether the segmentation mask is inverted.
            */
            invertMask: boolean
            
            /**
            * Whether edge refinement is applied for better mask accuracy.
            */
            refineEdge: boolean
            
            /**
            * Type of segmentation to apply.
            */
            segmentationType: Editor.Assets.SegmentationType
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Built in segmentation textures to be used with {@link Editor.Assets.SegmentationTexture}.
        */
        enum SegmentationType {
            /**
            * Full portrait segmentation mask.
            */
            PortraitSegmentation,
            /**
            * Hair region segmentation.
            */
            PortraitHair,
            /**
            * Skin region segmentation.
            */
            PortraitSkin,
            /**
            * Shoulder region segmentation.
            */
            PortraitShoulder,
            /**
            * Face region segmentation.
            */
            PortraitFace,
            /**
            * Head region segmentation.
            */
            PortraitHead,
            /**
            * Sky region segmentation.
            */
            Sky,
            /**
            * Body region segmentation.
            */
            Body,
            /**
            * Upper body clothing segmentation.
            */
            UpperGarment,
            /**
            * Lower body clothing segmentation.
            */
            LowerGarment,
            /**
            * Full body clothing segmentation.
            */
            FullGarment,
            /**
            * Footwear segmentation.
            */
            Footwear
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Script executed during asset package setup.
        */
        class SetupScript {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The setup script source code.
            
            * @readonly
            */
            code: string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Enum of shader type categories.
        */
        enum ShaderType {
            /**
            * Shader type for 3D mesh rendering.
            */
            Mesh3d,
            /**
            * Shader type for post-processing effects.
            */
            PostEffect,
            /**
            * Shader type for hair rendering.
            */
            Hair,
            /**
            * Shader type for Gaussian splatting rendering.
            */
            GaussianSplatting
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        class SizeCompressionSettings extends Editor.Assets.FileCompressionSettings {
            
            /** @hidden */
            protected constructor()
            
            level: Editor.Assets.TextureCompressionLevel
            
            static create(scene: Editor.Assets.Scene): Editor.Assets.SizeCompressionSettings
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * A native asset that can be used with {@link LensScripting.MarkerTrackingComponent} Learn more at {@link LensScripting.SnapcodeMarkerProvider}. Import with {@link Editor.Model.AssetManager#createNativeAsset}. 
        */
        class SnapcodeMarker extends Editor.Assets.MarkerAsset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Asset representing a subgraph embeddable in other graphs.
        */
        class SubgraphAsset extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Supabase project asset with connection credentials.
        */
        class SupabaseProject extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Unique identifier of the Supabase project.
            */
            projectId: string
            
            /**
            * Display name of the Supabase project.
            */
            projectName: string
            
            /**
            * URL of the Supabase project API endpoint.
            */
            projectUrl: string
            
            /**
            * Public API token for the Supabase project.
            */
            publicToken: string
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Base texture asset.
        
        * @example
        * ```js
        * // Get access to the project's assetManager
        * const model = this.pluginSystem.findInterface(Editor.Model.IModel);
        * const assetManager = model.project.assetManager;
        
        * // Locate the shader pass we want to import
        * const resourceLoc = import.meta.resolve('Resources/image.jpeg');
        * const absGraphPath = new Editor.Path(resourceLoc);
        
        * // Import the shader pass
        * const meta = await assetManager.importExternalFileAsync(absolutePath, new Editor.Path(''), Editor.Model.ResultType.Packed);
        * // You can set meta.primary on a pass asset to use it.
        * ```
        */
        class Texture extends Editor.Assets.Asset {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        enum TextureCompressionLevel {
            Low,
            Medium,
            High
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Associates a texture with a sampler for use in a material pass.
        */
        class TextureParameter {
            /**
            * Create a texture parameter from a UUID.
            */
            constructor(id: import('LensStudio:Uuid').Uuid)
            
            /**
            * UUID of the texture this parameter references.
            */
            id: import('LensStudio:Uuid').Uuid
            
            /**
            * Sampler settings for this texture parameter.
            */
            sampler: Editor.Assets.Sampler
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * TypeScript script asset for Lens Studio plugins.
        */
        class TypeScriptAsset extends Editor.Assets.ScriptAsset {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Input parameters and metadata for the TypeScript script.
            
            * @readonly
            */
            scriptInputInfo: any
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Used to set the version of script assets.
        
        * @example
        * ```js
        * scriptAsset.version.major = 3;
        * scriptAsset.version.minor  = 2;
        * scriptAsset.version.patch = 1;
        * ```
        */
        class Version {
            /**
            * scriptAsset.version = new Editor.Assets.Version(1,2,3);
            */
            constructor(major: number, minor: number, patch: number)
            
            /**
            * Major version number.
            */
            major: number
            
            /**
            * Minor version number.
            */
            minor: number
            
            /**
            * Patch version number. 
            */
            patch: number
            
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Used witih {@link Editor.Assets.FaceMesh}
        */
        enum VertexAttribute {
            /**
            * Vertex position coordinates in 3D space.
            */
            Position,
            /**
            * Surface normal vector for lighting calculations.
            */
            Normal,
            /**
            * Tangent vector for normal mapping.
            */
            Tangent,
            /**
            * Per-vertex color data.
            */
            Color,
            /**
            * Primary texture coordinate set.
            */
            Texcoord0,
            /**
            * Secondary texture coordinate set.
            */
            Texcoord1,
            /**
            * Tertiary texture coordinate set.
            */
            Texcoord2,
            /**
            * Quaternary texture coordinate set.
            */
            Texcoord3,
            /**
            * Skeletal animation bone indices and weights.
            */
            BoneData
        }
    
    }

}

declare namespace Editor {
    namespace Assets {
        /**
        * Options for what value is returned when a fetch falls outside the bounds of a texture.
        
        */
        enum WrapMode {
            /**
            * Texture coordinates will be clamped between 0 and 1.
            
            */
            ClampToEdge,
            /**
            * Between -1 and 1, the texture is mirrored across the 0 axis. The image is repeated outside of that range.
            
            */
            MirroredRepeat,
            /**
            * Wrap to the other side of the texture, effectively ignoring the integer part of the number to keep only the fractional part of the texture coordinate.
            
            */
            Repeat,
            /**
            * Outside the range of 0 to 1, texture coordinates return the value specified by the borderColor property.
            
            */
            ClampToBorderColor
        }
    
    }

}

declare namespace Editor {
    /**
    * Enum of spatial axes.
    */
    enum Axis {
        /**
        * X-axis.
        */
        X,
        /**
        * Y-axis.
        */
        Y,
        /**
        * Z-axis.
        */
        Z
    }

}

declare namespace Editor {
    /**
    * Wraps a byte array for data serialization and deserialization.
    */
    class Buffer {
        /**
        * Create a buffer from a byte array.
        */
        constructor(bytes: Uint8Array)
        
        /**
        * Return the underlying byte array.
        */
        toBytes(): Uint8Array
        
        /**
        * Return the buffer contents as a UTF-8 string.
        */
        toString(): string
        
    }

}

declare namespace Editor {
    /**
    * Container for all scene component types and related enums.
    */
    class Components {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Component that manages animation playback with clips and autoplay settings.
        */
        class AnimationPlayer extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Array of animation clips available for playback.
            */
            animationClips: Editor.AnimationClip[]
            
            /**
            * Whether animation starts playing automatically.
            */
            autoplay: boolean
            
            /**
            * Defines how animation clip ranges are interpreted.
            */
            clipRangeType: Editor.Components.ClipRangeType
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Manages audio playback and spatial audio properties for a scene object.
        */
        class AudioComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The audio track asset to play.
            */
            audioTrack: Editor.Assets.AudioTrackAsset
            
            /**
            * The distance attenuation curve type for spatial audio.
            */
            curveType: Editor.Components.DistanceEffectCurveType
            
            /**
            * Whether the audio loops automatically on playback.
            */
            enableAutoplayLoop: boolean
            
            /**
            * Whether directivity effect is applied to spatial audio.
            */
            enableDirectivityEffect: boolean
            
            /**
            * Whether distance-based attenuation affects audio volume.
            */
            enableDistanceEffect: boolean
            
            /**
            * Whether audio mixes to Snapchat audio output.
            */
            enableMixToSnap: boolean
            
            /**
            * Whether object position affects spatial audio rendering.
            */
            enablePositionEffect: boolean
            
            /**
            * Whether spatial audio processing is enabled.
            */
            enableSpatialAudio: boolean
            
            /**
            * Maximum distance for spatial audio attenuation.
            */
            maxDistance: number
            
            /**
            * Minimum distance before full-volume spatial audio.
            */
            minDistance: number
            
            /**
            * Volume level for recording audio output.
            */
            recordVolume: number
            
            /**
            * Playback volume level (0-1).
            */
            volume: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Configures background styling for UI components.
        */
        class BackgroundSettings extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Corner radius of the background shape.
            */
            cornerRadius: number
            
            /**
            * Whether the background is visible.
            */
            enabled: boolean
            
            /**
            * Fill color and style of the background.
            */
            fill: Editor.Components.TextFill
            
            /**
            * Spacing around the background edges.
            */
            margins: Editor.Rect
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Head} to set position on the face.
        */
        class BarycentricVertex {
            /**
            * Create a new barycentric vertex.
            */
            constructor()
            
            /**
            * Indices of the three vertices forming the barycentric coordinate triangle.
            */
            indices: number[]
            
            /**
            * Barycentric weights (u, v, w) determining position within the triangle.
            */
            weights: number[]
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Base class for mesh-based visual components.
        */
        class BaseMeshVisual extends Editor.Components.Visual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Horizontal alignment of the mesh visual.
            */
            horizontalAlignment: Editor.Alignment.Horizontal
            
            /**
            * Shadow rendering mode for the mesh.
            */
            meshShadowMode: Editor.Components.MeshShadowMode
            
            /**
            * Color of the mesh shadow.
            */
            shadowColor: vec4
            
            /**
            * Opacity of the mesh shadow.
            */
            shadowDensity: number
            
            /**
            * How the mesh stretches to fit its container.
            */
            stretchMode: Editor.Components.StretchMode
            
            /**
            * Vertical alignment of the mesh visual.
            */
            verticalAlignment: Editor.Alignment.Vertical
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Renders the scene from a viewpoint with configurable projection and output.
        */
        class Camera extends Editor.Components.RenderLayerOwner {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Width-to-height ratio of the camera view.
            */
            aspect: number
            
            /**
            * Preset aspect ratio option.
            */
            aspectPreset: Editor.Components.CameraAspectPreset
            
            /**
            * Projection type (perspective or orthographic).
            */
            cameraType: Editor.Components.CameraType
            
            /**
            * Background color rendered before scene content.
            */
            clearColor: Editor.Components.CameraClearColor
            
            /**
            * Depth buffer clearing behavior.
            */
            clearDepth: Editor.Components.CameraClearDepth
            
            /**
            * Depth buffer format and configuration.
            */
            depthMode: Editor.Components.CameraDepthBufferMode
            
            /**
            * Device camera properties (aspect, FOV, or both) to inherit from the physical camera.
            */
            deviceProperty: Editor.Components.CameraDeviceProperty
            
            /**
            * Far clipping plane distance.
            */
            far: number
            
            /**
            * Vertical field of view in degrees.
            */
            fov: number
            
            /**
            * Texture used as the camera's input (background) image.
            */
            inputTexture: Editor.Assets.Texture
            
            /**
            * Texture used to mask camera output.
            */
            maskTexture: Editor.Assets.Texture
            
            /**
            * Mip level at which to render the camera.
            */
            mipmapLevel: number
            
            /**
            * Near clipping plane distance.
            */
            near: number
            
            /**
            * Order-independent transparency layer configuration.
            */
            oitLayers: Editor.Components.CameraOitLayers
            
            /**
            * Height of the orthographic view in world units.
            
            * @readonly
            */
            orthographicSize: vec2
            
            /**
            * Rendering priority relative to other cameras.
            */
            renderOrder: number
            
            /**
            * Output texture or framebuffer for rendering.
            */
            renderTarget: Editor.Assets.RenderTarget
            
            /**
            * Size of the camera's render region.
            */
            size: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        enum CameraAspectPreset {
            /**
            * Use a specific device-based aspect ratio preset.
            */
            Specific,
            /**
            * User-defined aspect ratio.
            */
            Custom
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        class CameraClearColor extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Clear color as a vec4 RGBA value.
            */
            color: vec4
            
            /**
            * Texture to use when mode is set to Texture.
            */
            input: Editor.Assets.Texture
            
            /**
            * How the camera background is cleared.
            */
            mode: Editor.Components.CameraClearColor.Mode
            
            /**
            * Return metadata for CameraClearColor.
            */
            static staticMeta(): Editor.Model.Meta
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace CameraClearColor {
            /**
            * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
            */
            enum Mode {
                /**
                * Do not clear the camera background.
                */
                None,
                /**
                * Clear to the scene background.
                */
                Background,
                /**
                * Clear to a solid color.
                */
                Color,
                /**
                * Clear to a texture.
                */
                Texture
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        class CameraClearDepth extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Texture to use when mode is set to Texture.
            */
            input: Editor.Assets.Texture
            
            /**
            * How depth clearing is performed.
            */
            mode: Editor.Components.CameraClearDepth.Mode
            
            /**
            * Depth value to clear to when mode is set to Value.
            */
            value: number
            
            /**
            * Return metadata for CameraClearDepth.
            */
            static staticMeta(): Editor.Model.Meta
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace CameraClearDepth {
            /**
            * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
            */
            enum Mode {
                /**
                * Do not clear the depth buffer.
                */
                None,
                /**
                * Clear depth buffer to a constant value.
                */
                Value,
                /**
                * Clear depth buffer to a texture.
                */
                Texture
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        enum CameraDepthBufferMode {
            /**
            * Standard linear depth buffer mode.
            */
            Regular,
            /**
            * Logarithmic depth buffer for improved precision at long distances.
            */
            Logarithmic
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        enum CameraDeviceProperty {
            /**
            * No device camera properties synchronized.
            */
            None,
            /**
            * Synchronize aspect ratio from the device camera.
            */
            Aspect,
            /**
            * Synchronize field of view from the device camera.
            */
            Fov,
            /**
            * Synchronize all supported device camera properties.
            */
            All
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        enum CameraOitLayers {
            /**
            * Order-independent transparency disabled.
            */
            NoOit,
            /**
            * OIT with 4 transparency layers.
            */
            Layers4,
            /**
            * OIT with 4 layers plus one additional layer.
            */
            Layers4Plus1,
            /**
            * OIT with 8 transparency layers.
            */
            Layers8
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.Camera}.
        */
        enum CameraType {
            /**
            * Perspective projection simulating depth and foreshortening.
            */
            Perspective,
            /**
            * Orthographic projection with no depth perspective.
            */
            Orthographic
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Manages 2D canvas rendering and layout properties for a scene object.
        */
        class Canvas extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Anchor point for the canvas as a normalized 2D vector.
            */
            pivot: vec2
            
            /**
            * Determines how the canvas sorts its children during rendering.
            */
            sortingType: Editor.Components.SortingType
            
            /**
            * Specifies the unit system used for canvas measurements.
            */
            unitType: Editor.Components.UnitType
            
            /**
            * Bounding rectangle of the canvas in world space coordinates.
            */
            worldSpaceRect: Editor.Rect
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Enum for text capitalization override options.
        */
        enum CapitalizationOverride {
            /**
            * No capitalization override applied.
            */
            None,
            /**
            * Convert text to all uppercase.
            */
            AllUpper,
            /**
            * Convert text to all lowercase.
            */
            AllLower
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Enum for specifying clip range units.
        */
        enum ClipRangeType {
            /**
            * Range specified in frame count.
            */
            Frames,
            /**
            * Range specified in seconds.
            */
            Seconds
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Simulates cloth physics with stretching, bending, and collision interactions.
        */
        class ClothVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Bending calculation method for the cloth simulation.
            */
            bendMode: Editor.Components.ClothVisual.BendMode
            
            /**
            * Resistance to bending, from 0 to 1.
            */
            bendStiffness: number
            
            /**
            * Physics colliders the cloth can collide with.
            */
            colliders: Editor.Components.Physics.ColliderComponent[]
            
            /**
            * Whether cloth collides with physics colliders.
            */
            collisionEnabled: boolean
            
            /**
            * Friction applied during cloth-collider contact.
            */
            collisionFriction: number
            
            /**
            * Distance offset for collision detection.
            */
            collisionOffset: number
            
            /**
            * How stiffly cloth responds to collisions.
            */
            collisionStiffness: number
            
            /**
            * Whether debug visualization is rendered.
            */
            debugModeEnabled: boolean
            
            /**
            * Simulation updates per second.
            */
            frameRate: number
            
            /**
            * Air resistance and internal cloth damping.
            */
            friction: number
            
            /**
            * Gravity acceleration vector applied to the cloth.
            */
            gravity: vec3
            
            /**
            * Constraint solver iterations per frame.
            */
            iterations: number
            
            /**
            * Total cloth mass in kilograms.
            */
            mass: number
            
            /**
            * Maximum acceleration any vertex can experience.
            */
            maxAcceleration: number
            
            /**
            * RenderMesh defining the cloth geometry.
            */
            mesh: Editor.Assets.RenderMesh
            
            /**
            * Resistance to stretching, from 0 to 1.
            */
            stretchStiffness: number
            
            /**
            * Whether normals are recalculated each frame.
            */
            updateNormalsEnabled: boolean
            
            /**
            * Array of pinned or constrained vertex bindings.
            */
            vertexBindings: Editor.Components.ClothVisual.VertexBinding[]
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace ClothVisual {
            /**
            * The same entity as in Lens Scripting.  @see {@link Editor.Components.ClothVisual}.
            */
            enum BendMode {
                /**
                * Isometric bending model preserving cloth surface area.
                */
                Isometric,
                /**
                * Linear bending model for simpler cloth simulation.
                */
                Linear
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace ClothVisual {
            /**
            * The same entity as in Lens Scripting.  @see {@link Editor.Components.ClothVisual}.
            */
            class VertexBinding extends Editor.Model.Entity {
                
                /** @hidden */
                protected constructor()
                
                /**
                * RGBA color value for the vertex binding.
                */
                color: vec4
                
                /**
                * Boolean mask controlling which color channels are active.
                */
                colorMask: vec4b
                
                /**
                * Scene object this vertex binding follows.
                */
                followObject: Editor.Model.SceneObject
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Base class for components attached to scene objects.
        */
        class Component extends Editor.Model.Prefabable {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Whether the component is active.
            */
            enabled: boolean
            
            /**
            * Name of the component.
            */
            name: string
            
            /**
            * Scene object this component is attached to.
            
            * @readonly
            */
            sceneObject: Editor.Model.SceneObject
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Component that configures device tracking behavior and options.
        */
        class DeviceTracking extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Active device tracking mode.
            */
            deviceTrackingMode: Editor.Components.DeviceTrackingMode
            
            /**
            * Configuration for rotation tracking.
            */
            rotationOptions: Editor.Components.RotationOptions
            
            /**
            * Configuration for surface tracking.
            */
            surfaceOptions: Editor.Components.SurfaceOptions
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.DeviceTracking}.
        */
        enum DeviceTrackingMode {
            /**
            * Track device rotation only.
            */
            Rotation,
            /**
            * Track device position relative to detected surfaces.
            */
            Surface,
            /**
            * Track device position and orientation in world space.
            */
            World
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Curve type options for distance-based effects.
        */
        enum DistanceEffectCurveType {
            /**
            * Linear distance attenuation curve.
            */
            Linear,
            /**
            * Inverse distance attenuation curve.
            */
            Inverse,
            /**
            * Logarithmic distance attenuation curve.
            */
            Logarithm,
            /**
            * Inverse logarithmic distance attenuation curve.
            */
            InverseLogarithm
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Drop shadow settings for text rendering.
        */
        class DropshadowSettings extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Whether the drop shadow effect is active.
            */
            enabled: boolean
            
            /**
            * Color and transparency of the drop shadow.
            */
            fill: Editor.Components.TextFill
            
            /**
            * Horizontal and vertical offset of the shadow from the text.
            */
            offset: vec2
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link Editor.Components.LightSource}.
        */
        enum EnvmapFromCameraMode {
            /**
            * Automatically select environment map source based on context.
            */
            Auto,
            /**
            * Generate environment map from the face camera.
            */
            Face,
            /**
            * Generate environment map from the surface camera.
            */
            Surface
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Text3D}.
        */
        enum ExtrudeDirection {
            /**
            * Extrude in the forward direction.
            */
            Forwards,
            /**
            * Extrude in the backward direction.
            */
            Backwards,
            /**
            * Extrude in both forward and backward directions.
            */
            Both
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Visual component for rendering eye color on a face mesh.
        */
        class EyeColorVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Which eye to render.
            */
            eyeToRender: Editor.Components.EyeToRender
            
            /**
            * Index of the face mesh to apply color to.
            */
            faceIndex: number
            
            /**
            * Whether the eye visual rotates with the face.
            */
            rotationEnabled: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.EyeColorVisual}.
        */
        enum EyeToRender {
            /**
            * Render to both eyes.
            */
            Both,
            /**
            * Render to left eye only.
            */
            Left,
            /**
            * Render to right eye only.
            */
            Right
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.FaceInsetRegion}. Use with {@link Editor.Components.FaceInsetVisual}.
        */
        enum FaceInsetRegion {
            /**
            * Left eye region of the face.
            */
            LeftEye,
            /**
            * Right eye region of the face.
            */
            RightEye,
            /**
            * Mouth region of the face.
            */
            Mouth,
            /**
            * Nose region of the face.
            */
            Nose,
            /**
            * Entire face region.
            */
            Face,
            /**
            * Custom face region defined by coordinates.
            */
            Custom
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Visual component for rendering an inset region of a face mesh with customizable borders.
        */
        class FaceInsetVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Index of the face to render the inset from.
            */
            faceIndex: number
            
            /**
            * Region of the face defining the inset boundaries.
            */
            faceRegion: Editor.Components.FaceInsetRegion
            
            /**
            * Flip the inset horizontally.
            */
            flipX: boolean
            
            /**
            * Flip the inset vertically.
            */
            flipY: boolean
            
            /**
            * Radius of the inner border curve.
            */
            innerBorderRadius: number
            
            /**
            * Position offset of the inset relative to its pivot.
            */
            offset: vec2
            
            /**
            * Radius of the outer border curve.
            */
            outerBorderRadius: number
            
            /**
            * Origin point for scaling and rotation transforms.
            */
            pivot: vec2
            
            /**
            * Scale factor applied to the source face region.
            */
            sourceScale: vec2
            
            /**
            * Number of mesh geometry subdivisions.
            */
            subDivisionCount: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Visual component for rendering face masks with optional mouth and teeth correction.
        */
        class FaceMaskVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Whether to render the mouth region.
            */
            drawMouth: boolean
            
            /**
            * Whether lip correction is applied.
            */
            enabledLipsFix: boolean
            
            /**
            * Whether teeth correction is applied.
            */
            enabledTeethFix: boolean
            
            /**
            * Index of the face this mask applies to.
            */
            faceIndex: number
            
            /**
            * 2D coordinates defining the mask boundary.
            */
            maskCoordinates: vec2[]
            
            /**
            * Texture applied when the mouth is closed.
            */
            maskOnMouthClosed: Editor.Assets.Texture
            
            /**
            * Original face index before modifications.
            */
            originalFaceIndex: number
            
            /**
            * Alpha blending strength for teeth correction.
            */
            teethFixAlpha: number
            
            /**
            * UV coordinates for texture mapping.
            */
            textureCoordinates: vec2[]
            
            /**
            * Whether original texture coordinates are used.
            */
            useOriginalTexCoords: boolean
            
            /**
            * Whether face position from the texture is used.
            */
            useTextureFacePosition: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Visual component for stretching and deforming face meshes with named features.
        */
        class FaceStretchVisual extends Editor.Components.BaseMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Register a new stretch feature by name.
            */
            addFeature(name: string): void
            
            /**
            * Remove all registered stretch features.
            */
            clearFeatures(): void
            
            /**
            * Get all registered feature names.
            */
            getFeatureNames(): string[]
            
            /**
            * Get the stretch points for a named feature.
            */
            getFeaturePoints(name: string): Editor.Components.StretchPoint[]
            
            /**
            * Get the blend weight for a named feature.
            */
            getFeatureWeight(name: string): number
            
            /**
            * Unregister a stretch feature by name.
            */
            removeFeature(name: string): void
            
            /**
            * Set the blend weight for a named feature.
            */
            setFeatureWeight(name: string, weight: number): void
            
            /**
            * Update the stretch points for a named feature.
            */
            updateFeaturePoints(name: string, points: Editor.Components.StretchPoint[]): void
            
            /**
            * Index of the face mesh to deform.
            */
            faceIndex: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Falloff curve type options for light and effect components.
        */
        enum FalloffType {
            /**
            * No falloff applied.
            */
            None,
            /**
            * Quadratic falloff curve.
            */
            Quadratic
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Renders a Gaussian Splatting asset with optional frame selection for animated content.
        */
        class GaussianSplattingVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Specify which frame to display (for animated Gaussian Splattings `.gsaf`).
            */
            activeFrame: number
            
            /**
            * A GaussianSplattingAsset to render.
            */
            asset: Editor.Assets.GaussianSplattingAsset
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Renders and simulates hair with physics, collision, and material properties.
        */
        class HairVisual extends Editor.Components.BaseMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Resistance to bending deformation.
            */
            bendStiffness: number
            
            /**
            * Density of hair clumping.
            */
            clumpDensity: number
            
            /**
            * Radius defining the area for hair clumping.
            */
            clumpRadius: number
            
            /**
            * Scale factor applied to clump tips.
            */
            clumpTipScale: number
            
            /**
            * Resistance to strand collapse.
            */
            collapseStiffness: number
            
            /**
            * Physics colliders that hair collides with.
            */
            colliders: Editor.Components.Physics.ColliderComponent[]
            
            /**
            * Whether hair collides with external objects.
            */
            collisionEnabled: boolean
            
            /**
            * Friction coefficient for collisions with external objects.
            */
            collisionFriction: number
            
            /**
            * Distance offset for collision detection.
            */
            collisionOffset: number
            
            /**
            * Stiffness applied when hair collides with external objects.
            */
            collisionStiffness: number
            
            /**
            * Damping factor for hair movement.
            */
            damp: number
            
            /**
            * Whether loaded hair strands are visualized in debug mode.
            */
            debugDrawLoadedStrands: boolean
            
            /**
            * Whether simulated hair strands are visualized in debug mode.
            */
            debugDrawSimulatedStrands: boolean
            
            /**
            * Whether debug visualization is enabled.
            */
            debugModeEnabled: boolean
            
            /**
            * Hair strand density.
            */
            density: number
            
            /**
            * Whether fallback rendering is used when simulation is unavailable.
            */
            fallbackModeEnabled: boolean
            
            /**
            * Simulation update rate in frames per second.
            */
            frameRate: number
            
            /**
            * Friction applied to hair movement.
            */
            friction: number
            
            /**
            * Gravitational acceleration vector affecting hair.
            */
            gravity: vec3
            
            /**
            * Hair geometry and strand data asset.
            */
            hairData: Editor.Assets.HairDataAsset
            
            /**
            * Material applied to rendered hair.
            */
            hairMaterial: Editor.Assets.Material
            
            /**
            * Resolution of hair simulation.
            */
            hairResolution: number
            
            /**
            * Noise amplitude applied to hair movement.
            */
            noise: number
            
            /**
            * Whether hair-to-hair collisions are enabled.
            */
            selfCollisionEnabled: boolean
            
            /**
            * Friction coefficient for hair-to-hair collisions.
            */
            selfCollisionFriction: number
            
            /**
            * Distance offset for self-collision detection.
            */
            selfCollisionOffset: number
            
            /**
            * Stiffness applied when hair collides with itself.
            */
            selfCollisionStiffness: number
            
            /**
            * Whether stepped hair cutting is enabled.
            */
            steppedCutEnabled: boolean
            
            /**
            * Overall hair strand stiffness.
            */
            stiffness: number
            
            /**
            * Length cut from each hair strand.
            */
            strandCut: number
            
            /**
            * Cosine angle threshold for neighbor strand interactions.
            */
            strandNeighborCosThreshold: number
            
            /**
            * Length threshold for neighbor strand interactions.
            */
            strandNeighborLengthThreshold: number
            
            /**
            * Search radius for neighboring strands.
            */
            strandNeighborRadius: number
            
            /**
            * Taper factor for hair strand width along length.
            */
            strandTaper: number
            
            /**
            * Width of individual hair strands.
            */
            strandWidth: number
            
            /**
            * Whether stretching limits on hair strands are enforced.
            */
            stretchLimitEnabled: boolean
            
            /**
            * Resistance to strand stretching.
            */
            stretchStiffness: number
            
            /**
            * Resistance to strand twisting.
            */
            twistStiffness: number
            
            /**
            * Whether wind force effects are applied.
            */
            windEnabled: boolean
            
            /**
            * Wind acceleration vector affecting hair.
            */
            windForce: vec3
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Component that attaches a scene object to a tracked head position.
        */
        class Head extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Barycentric vertex coordinates for the head attachment position.
            */
            attachedBarycentricVertex: Editor.Components.BarycentricVertex
            
            /**
            * Part of the head this component attaches to.
            */
            attachmentPoint: Editor.Components.HeadAttachmentPointType
            
            /**
            * Index of the face mesh this head component is attached to.
            */
            faceIndex: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Head}.
        */
        enum HeadAttachmentPointType {
            /**
            * Attachment at the center of the head.
            */
            HeadCenter,
            /**
            * Attachment at the Candide model center.
            */
            CandideCenter,
            /**
            * Attachment using triangle barycentric coordinates.
            */
            TriangleBarycentric,
            /**
            * Attachment at the center of the left eyeball.
            */
            LeftEyeballCenter,
            /**
            * Attachment at the center of the right eyeball.
            */
            RightEyeballCenter,
            /**
            * Attachment at the center of the mouth.
            */
            MouthCenter,
            /**
            * Attachment at the chin.
            */
            Chin,
            /**
            * Attachment at the center forehead.
            */
            Forehead,
            /**
            * Attachment at the left forehead.
            */
            LeftForehead,
            /**
            * Attachment at the right forehead.
            */
            RightForehead,
            /**
            * Attachment at the left cheek.
            */
            LeftCheek,
            /**
            * Attachment at the right cheek.
            */
            RightCheek
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Text} and {@link Editor.Components.Text3D}.
        */
        enum HorizontalOverflow {
            /**
            * Content extends beyond container bounds.
            */
            Overflow,
            /**
            * Content is cut off at the end.
            */
            Truncate,
            /**
            * Content is cut off at the beginning.
            */
            TruncateFront,
            /**
            * Content wraps to multiple lines.
            */
            Wrap,
            /**
            * Content is truncated at the end with an ellipsis.
            */
            Ellipsis,
            /**
            * Content is truncated at the beginning with an ellipsis.
            */
            EllipsisFront,
            /**
            * Content is scaled down to fit within the container.
            */
            Shrink
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Renders a 2D image with optional flip, pivot, and rotation.
        */
        class Image extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Flip the image horizontally.
            */
            flipX: boolean
            
            /**
            * Flip the image vertically.
            */
            flipY: boolean
            
            /**
            * Center point for rotation and scaling.
            */
            pivot: vec2
            
            /**
            * Rotation angle in degrees.
            */
            rotationAngle: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Handles touch and interaction detection on 3D meshes.
        */
        class InteractionComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Camera used to raycast interactions.
            */
            camera: Editor.Components.Camera
            
            /**
            * Whether depth-based filtering is enabled for interactions.
            */
            depthFilter: boolean
            
            /**
            * Mesh visuals that respond to touch interactions.
            */
            meshVisuals: Editor.Components.BaseMeshVisual[]
            
            /**
            * Minimum touch area in pixels to register an interaction.
            */
            minimumTouchSize: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Component controlling light properties, shadows, and environment mapping.
        */
        class LightSource extends Editor.Components.RenderLayerOwner {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Whether light position is adjusted automatically.
            */
            autoLightSourcePosition: boolean
            
            /**
            * Whether shadow frustum size is calculated automatically.
            */
            autoShadowFrustumSize: boolean
            
            /**
            * Scale factor for automatic shadow frustum size.
            */
            autoShadowFrustumSizeExtend: number
            
            /**
            * Light color as an RGBA vector.
            */
            color: vec4
            
            /**
            * Texture for diffuse environment mapping.
            */
            diffuseEnvmapTexture: Editor.Assets.Texture
            
            /**
            * Input texture for dynamic environment mapping.
            */
            dynamicEnvInputTexture: Editor.Assets.Texture
            
            /**
            * Brightness multiplier for the environment map.
            */
            envmapExposure: number
            
            /**
            * Mode for deriving the environment map from the camera.
            */
            envmapFromCameraMode: Editor.Components.EnvmapFromCameraMode
            
            /**
            * Rotation angle of the environment map in degrees.
            */
            envmapRotation: number
            
            /**
            * Sharpness parameter for light estimation.
            */
            estimationSharpness: number
            
            /**
            * Distance over which light intensity decreases.
            */
            falloffRange: number
            
            /**
            * Curve used for light intensity falloff.
            */
            falloffType: Editor.Components.FalloffType
            
            /**
            * Inner cone angle for spot lights in degrees.
            */
            innerConeAngle: number
            
            /**
            * Brightness multiplier of the light.
            */
            intensity: number
            
            /**
            * Type of light source (point, directional, spot, etc.).
            */
            lightType: Editor.Components.LightType
            
            /**
            * Outer cone angle for spot lights in degrees.
            */
            outerConeAngle: number
            
            /**
            * Blur amount applied to shadow edges.
            */
            shadowBlurRadius: number
            
            /**
            * Shadow tint as an RGBA vector.
            */
            shadowColor: vec4
            
            /**
            * Shadow opacity multiplier.
            */
            shadowDensity: number
            
            /**
            * Far clip distance for shadow projection.
            */
            shadowFrustumFarClipPlane: number
            
            /**
            * Near clip distance for shadow projection.
            */
            shadowFrustumNearClipPlane: number
            
            /**
            * Size of the shadow projection volume.
            */
            shadowFrustumSize: number
            
            /**
            * Resolution of the shadow map texture.
            */
            shadowTextureSize: number
            
            /**
            * Shadow rendering method (none, hard, or soft).
            */
            shadowType: Editor.Components.ShadowType
            
            /**
            * Texture for specular environment mapping.
            */
            specularEnvmapTexture: Editor.Assets.Texture
            
            /**
            * Whether environment map is derived from the camera.
            */
            useEnvmapFromCamera: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.LightSource}.
        */
        enum LightType {
            /**
            * Point light emitting in all directions from a single position.
            */
            Point,
            /**
            * Directional light emitting parallel rays from a fixed direction.
            */
            Directional,
            /**
            * Spot light emitting a cone of light in a specific direction.
            */
            Spot,
            /**
            * Ambient light uniformly illuminating the scene.
            */
            Ambient,
            /**
            * Environment map light using a texture to provide scene illumination.
            */
            EnvMap,
            /**
            * Light estimated from real-world scene analysis.
            */
            Estimation
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Visual component applying liquify distortion to face mesh geometry.
        */
        class LiquifyVisual extends Editor.Components.BaseMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Strength of the liquify deformation effect.
            */
            intensity: number
            
            /**
            * Size of the liquify brush area.
            */
            radius: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Pins a scene object to a real-world location asset.
        */
        class LocatedAtComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Location asset associated with this component.
            */
            location: Editor.Assets.LocationAsset
            
            /**
            * 3D position offset from the location.
            */
            position: vec3
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Rotates an object to face a target point or direction.
        */
        class LookAtComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Which local axes point toward and up relative to the target.
            */
            aimVectors: Editor.Components.LookAtComponent.AimVectors
            
            /**
            * Whether to look at a point or in a direction.
            */
            lookAtMode: Editor.Components.LookAtComponent.LookAtMode
            
            /**
            * Additional rotation applied after looking at the target.
            */
            offsetRotation: quat
            
            /**
            * Scene object to look at.
            */
            target: Editor.Model.SceneObject
            
            /**
            * Reference axis used as world up.
            */
            worldUpVector: Editor.Components.LookAtComponent.WorldUpVector
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace LookAtComponent {
            /**
            * Settings used with {@link Editor.Components.LookAtComponent}.
            */
            enum AimVectors {
                /**
                * X axis aims at target, Y axis is up.
                */
                XAimYUp,
                /**
                * X axis aims at target, Z axis is up.
                */
                XAimZUp,
                /**
                * Y axis aims at target, X axis is up.
                */
                YAimXUp,
                /**
                * Y axis aims at target, Z axis is up.
                */
                YAimZUp,
                /**
                * Z axis aims at target, X axis is up.
                */
                ZAimXUp,
                /**
                * Z axis aims at target, Y axis is up.
                */
                ZAimYUp,
                /**
                * X axis aims at target, negative Y axis is up.
                */
                XAimNegativeYUp,
                /**
                * X axis aims at target, negative Z axis is up.
                */
                XAimNegativeZUp,
                /**
                * Y axis aims at target, negative X axis is up.
                */
                YAimNegativeXUp,
                /**
                * Y axis aims at target, negative Z axis is up.
                */
                YAimNegativeZUp,
                /**
                * Z axis aims at target, negative X axis is up.
                */
                ZAimNegativeXUp,
                /**
                * Z axis aims at target, negative Y axis is up.
                */
                ZAimNegativeYUp,
                /**
                * Negative X axis aims at target, Y axis is up.
                */
                NegativeXAimYUp,
                /**
                * Negative X axis aims at target, Z axis is up.
                */
                NegativeXAimZUp,
                /**
                * Negative Y axis aims at target, X axis is up.
                */
                NegativeYAimXUp,
                /**
                * Negative Y axis aims at target, Z axis is up.
                */
                NegativeYAimZUp,
                /**
                * Negative Z axis aims at target, X axis is up.
                */
                NegativeZAimXUp,
                /**
                * Negative Z axis aims at target, Y axis is up.
                */
                NegativeZAimYUp,
                /**
                * Negative X axis aims at target, negative Y axis is up.
                */
                NegativeXAimNegativeYUp,
                /**
                * Negative X axis aims at target, negative Z axis is up.
                */
                NegativeXAimNegativeZUp,
                /**
                * Negative Y axis aims at target, negative X axis is up.
                */
                NegativeYAimNegativeXUp,
                /**
                * Negative Y axis aims at target, negative Z axis is up.
                */
                NegativeYAimNegativeZUp,
                /**
                * Negative Z axis aims at target, negative X axis is up.
                */
                NegativeZAimNegativeXUp,
                /**
                * Negative Z axis aims at target, negative Y axis is up.
                */
                NegativeZAimNegativeYUp
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace LookAtComponent {
            /**
            * Settings used with {@link Editor.Components.LookAtComponent}.
            */
            enum LookAtMode {
                /**
                * Look at a specific point in 3D space.
                */
                LookAtPoint,
                /**
                * Look in a specific direction.
                */
                LookAtDirection
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace LookAtComponent {
            /**
            * Settings used with {@link Editor.Components.LookAtComponent}.
            */
            enum WorldUpVector {
                /**
                * World up aligned with scene X axis.
                */
                SceneX,
                /**
                * World up aligned with scene Y axis.
                */
                SceneY,
                /**
                * World up aligned with scene Z axis.
                */
                SceneZ,
                /**
                * World up aligned with target X axis.
                */
                TargetX,
                /**
                * World up aligned with target Y axis.
                */
                TargetY,
                /**
                * World up aligned with target Z axis.
                */
                TargetZ,
                /**
                * World up aligned with object X axis.
                */
                ObjectX,
                /**
                * World up aligned with object Y axis.
                */
                ObjectY,
                /**
                * World up aligned with object Z axis.
                */
                ObjectZ
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Enables drag, rotate, and scale interactions on a scene object.
        */
        class ManipulateComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Whether dragging is enabled.
            */
            drag: boolean
            
            /**
            * Maximum distance objects can be dragged.
            */
            maxDistance: number
            
            /**
            * Maximum allowed scale factor.
            */
            maxScale: number
            
            /**
            * Minimum distance objects can be dragged.
            */
            minDistance: number
            
            /**
            * Minimum allowed scale factor.
            */
            minScale: number
            
            /**
            * Whether rotation is enabled.
            */
            rotate: boolean
            
            /**
            * Whether scaling is enabled.
            */
            scale: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Tracks a marker asset for marker-based AR anchoring.
        */
        class MarkerTrackingComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The marker asset being tracked.
            */
            marker: Editor.Assets.MarkerAsset
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Applies a rounded-corner mask to a scene object.
        */
        class MaskingComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Corner radius of the mask in pixels.
            */
            cornerRadius: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Base class for mesh visual components that render with materials.
        */
        class MaterialMeshVisual extends Editor.Components.BaseMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Insert a material at the specified index.
            */
            addMaterialAt(value: Editor.Assets.Material, pos?: number): void
            
            /**
            * Remove all materials.
            */
            clearMaterials(): void
            
            /**
            * Retrieve the material at the specified index.
            */
            getMaterialAt(pos: number): Editor.Assets.Material
            
            /**
            * Get the total number of materials.
            */
            getMaterialsCount(): number
            
            /**
            * Find the index of a given material.
            */
            indexOfMaterial(value: Editor.Assets.Material): number | undefined
            
            /**
            * Move a material from one index to another.
            */
            moveMaterial(origin: number, destination: number): void
            
            /**
            * Remove the material at the specified index.
            */
            removeMaterialAt(pos: number): void
            
            /**
            * Replace the material at the specified index.
            */
            setMaterialAt(pos: number, value: Editor.Assets.Material): void
            
            /**
            * Primary material used for rendering.
            */
            mainMaterial: Editor.Assets.Material
            
            /**
            * Array of all materials on this mesh visual.
            */
            materials: Editor.Assets.Material[]
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The same entity as in Lens Scripting.  @see {@link LensScripting.BaseMeshVisual}.
        */
        enum MeshShadowMode {
            /**
            * Mesh neither casts nor receives shadows.
            */
            None,
            /**
            * Mesh casts shadows onto other objects.
            */
            Caster,
            /**
            * Mesh receives shadows from other objects.
            */
            Receiver
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Tracks 2D objects in the camera feed using ML classification.
        
        * @beta
        */
        class ObjectTracking extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Type of object to detect and track.
            
            * @beta
            */
            trackingType: Editor.Components.ObjectTrackingType
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Tracks and matches 3D objects in the scene using pose estimation.
        */
        class ObjectTracking3D extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Scene object root matched to the tracked asset.
            */
            matchingRootObject: Editor.Model.SceneObject
            
            /**
            * Index of the matched object in the tracking results.
            */
            objectIndex: number
            
            /**
            * Whether position tracking is applied.
            */
            trackPosition: boolean
            
            /**
            * 3D asset to track.
            */
            trackingAsset: Editor.Assets.Object3DAsset
            
            /**
            * Transform properties to track.
            */
            trackingMode: Editor.Components.ObjectTracking3D.TrackingMode
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace ObjectTracking3D {
            /**
            * Enum specifying how 3D object tracking data is interpreted.
            */
            enum TrackingMode {
                /**
                * Track object proportions and pose.
                */
                ProportionsAndPose,
                /**
                * Track object pose only.
                */
                PoseOnly,
                /**
                * Track object as an attachment point.
                */
                Attachment
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.ObjectTracking}.
        */
        enum ObjectTrackingType {
            /**
            * Track cats.
            */
            Cat,
            /**
            * Track dogs.
            */
            Dog,
            /**
            * Track pets.
            */
            Pet,
            /**
            * Track hands.
            */
            Hand,
            /**
            * Track nails.
            */
            Nails,
            /**
            * Track shoulders.
            */
            Shoulder,
            /**
            * Track upper body.
            */
            UpperBody,
            /**
            * Track full body.
            */
            FullBody
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings for outline rendering on a component.
        */
        class OutlineSettings extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Whether the outline is displayed.
            */
            enabled: boolean
            
            /**
            * Texture applied to the outline.
            */
            fill: Editor.Components.TextFill
            
            /**
            * Width of the outline in pixels.
            */
            size: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Namespace containing physics simulation components, shapes, and constraints for rigid bodies and colliders.
        */
        class Physics {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * Rigid body physics component for dynamic objects.
            */
            class BodyComponent extends Editor.Components.Physics.ColliderComponent {
                
                /** @hidden */
                protected constructor()
                
                /**
                * Rotational resistance value.
                */
                angularDamping: number
                
                /**
                * Body configuration mode.
                */
                bodySetting: Editor.Components.Physics.BodySetting
                
                /**
                * Numeric value for the selected body setting.
                */
                bodySettingValue: number
                
                /**
                * Linear movement resistance value.
                */
                damping: number
                
                /**
                * Whether the body is affected by physics forces.
                */
                dynamic: boolean
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * Enum specifying how a physics body's mass is calculated.
            */
            enum BodySetting {
                /**
                * Calculate mass from an explicit value.
                */
                Mass,
                /**
                * Calculate mass from density and volume.
                */
                Density
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * Box-shaped physics collider component.
            */
            class Box extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                /**
                * Dimensions of the box collider in x, y, z axes.
                */
                size: vec3
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * A capsule-shaped physics collider.
            */
            class Capsule extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                /**
                * The axis along which the capsule extends.
                */
                axis: Editor.Axis
                
                /**
                * The length of the capsule along its axis.
                */
                length: number
                
                /**
                * The radius of the capsule.
                */
                radius: number
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * Defines collision geometry and physics properties for an object.
            */
            class ColliderComponent extends Editor.Components.Component {
                
                /** @hidden */
                protected constructor()
                
                /**
                * Enable visual debugging of the collider shape.
                */
                debugDrawEnabled: boolean
                
                /**
                * Collision filtering rules for this collider.
                */
                filter: Editor.Assets.Physics.Filter
                
                /**
                * Automatically match collider shape to visual bounds.
                */
                fitVisual: boolean
                
                /**
                * Force collision shape to use compound geometry.
                */
                forceCompound: boolean
                
                /**
                * Disable collision response while maintaining overlap detection.
                */
                intangible: boolean
                
                /**
                * Physics material properties for this collider.
                */
                matter: Editor.Assets.Physics.Matter
                
                /**
                * Filtering rules for overlap queries on this collider.
                */
                overlapFilter: Editor.Assets.Physics.Filter
                
                /**
                * Damping factor for rotational motion.
                */
                rotateSmoothFactor: number
                
                /**
                * Collision shape definition.
                */
                shape: Editor.Components.Physics.Shape
                
                /**
                * Enable motion smoothing between physics updates.
                */
                smooth: boolean
                
                /**
                * Damping factor for translational motion.
                */
                translateSmoothFactor: number
                
                /**
                * Physics simulation settings for this collider's world.
                */
                worldSettings: Editor.Assets.Physics.WorldSettingsAsset
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * Cone-shaped physics collider.
            */
            class Cone extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                /**
                * Direction the cone points along.
                */
                axis: Editor.Axis
                
                /**
                * Height of the cone.
                */
                length: number
                
                /**
                * Base radius of the cone.
                */
                radius: number
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * Physics constraint types for rigidbody connections.
            */
            enum Constraint {
                /**
                * Rigidly locks two bodies together with no relative motion.
                */
                Fixed,
                /**
                * Constrains two bodies to maintain a fixed point connection.
                */
                Point,
                /**
                * Constrains two bodies to rotate around a shared axis.
                */
                Hinge
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * Component that applies physics constraints to a scene object.
            */
            class ConstraintComponent extends Editor.Components.Component {
                
                /** @hidden */
                protected constructor()
                
                /**
                * The physics constraint definition applied by this component.
                */
                constraint: Editor.Components.Physics.Constraint
                
                /**
                * Enable or disable debug visualization of the constraint.
                */
                debugDrawEnabled: boolean
                
                /**
                * The scene object that this constraint targets.
                */
                target: Editor.Components.Physics.ColliderComponent
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * Cylindrical physics shape with configurable axis, length, and radius.
            */
            class Cylinder extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                /**
                * The axis along which the cylinder is oriented.
                */
                axis: Editor.Axis
                
                /**
                * The height of the cylinder along its axis.
                */
                length: number
                
                /**
                * The radius of the cylinder's circular cross-section.
                */
                radius: number
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * A physics shape using a level set asset for complex collision geometry.
            */
            class LevelSet extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                /**
                * The level set asset that defines the shape's geometry and collision data.
                */
                asset: Editor.Assets.Physics.LevelsetColliderAsset
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * Physics mesh shape component for collision detection using custom meshes.
            */
            class Mesh extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                /**
                * Whether the mesh uses convex collision.
                */
                convex: boolean
                
                /**
                * The render mesh used for collision geometry.
                */
                mesh: Editor.Assets.RenderMesh
                
                /**
                * The skin asset used for collision geometry.
                */
                skin: Editor.Components.Skin
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * Base class for physics shapes attached to entities.
            */
            class Shape extends Editor.Model.EntityStructure {
                
                /** @hidden */
                protected constructor()
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * A spherical physics shape component.
            */
            class Sphere extends Editor.Components.Physics.Shape {
                
                /** @hidden */
                protected constructor()
                
                /**
                * The radius of the sphere in world units.
                */
                radius: number
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace Physics {
            /**
            * Physics world container managing simulation and settings.
            */
            class WorldComponent extends Editor.Components.Component {
                
                /** @hidden */
                protected constructor()
                
                /**
                * Execution priority for physics simulation updates.
                */
                updateOrder: number
                
                /**
                * Physics world configuration and behavior parameters.
                */
                worldSettings: Editor.Assets.Physics.WorldSettingsAsset
                
                static getMeta(): Editor.Model.Meta
                
                static getTypeName(): string
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        namespace PinToMesh {
            /**
            * Specifies how the pin aligns to the mesh.
            */
            enum Orientation {
                /**
                * Pin uses only position from the mesh.
                */
                OnlyPosition,
                /**
                * Pin uses both position and direction from the mesh.
                */
                PositionAndDirection
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Component that pins a SceneObject to a point on a mesh surface.
        */
        class PinToMeshComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Position offset applied to the pinned object relative to the mesh surface.
            */
            offsetPosition: vec3
            
            /**
            * Rotation offset applied to the pinned object.
            */
            offsetRotation: vec3
            
            /**
            * How the pinned object's orientation aligns to the mesh surface.
            */
            orientation: Editor.Components.PinToMesh.Orientation
            
            /**
            * UV coordinates on the mesh where the object is pinned.
            */
            pinUV: vec2
            
            /**
            * The mesh visual to pin the object to.
            */
            target: Editor.Components.BaseMeshVisual
            
            /**
            * Whether to use vertex normals for surface orientation calculation.
            */
            useVertexNormal: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Visual component for rendering post-effect materials.
        */
        class PostEffectVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Component for setting rectangular regions on textures.
        */
        class RectangleSetter extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Texture to crop with rectangular bounds.
            */
            cropTexture: Editor.Assets.Texture
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * The render layer which the component will be on. 
        */
        class RenderLayerOwner extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The set of render layers this component belongs to.
            */
            renderLayer: Editor.Model.LayerSet
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Renders a mesh with customizable blend shapes and normals.
        */
        class RenderMeshVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Enable blending of normals between blend shapes.
            */
            blendNormals: boolean
            
            /**
            * Enable blend shapes for this render mesh.
            */
            blendShapesEnabled: boolean
            
            /**
            * The render mesh to display.
            */
            mesh: Editor.Assets.RenderMesh
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Visual component for applying retouching effects to faces.
        */
        class RetouchVisual extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Intensity of eye whitening effect, from 0 to 1.
            */
            eyeWhiteningIntensity: number
            
            /**
            * Index of the face to apply retouching effects to.
            */
            faceIndex: number
            
            /**
            * Intensity of eye sharpening effect, from 0 to 1.
            */
            sharpenEyeIntensity: number
            
            /**
            * Intensity of soft skin smoothing effect, from 0 to 1.
            */
            softSkinIntensity: number
            
            /**
            * Intensity of teeth whitening effect, from 0 to 1.
            */
            teethWhiteningIntensity: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Configures rotation behavior for entities.
        */
        class RotationOptions extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Invert the rotation direction.
            */
            invertRotation: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Component that defines a rectangular region on screen.
        */
        class ScreenRegionComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The screen region type and bounds.
            */
            region: Editor.Components.ScreenRegionType
            
            /**
            * Enable resizing the region with keyboard input.
            */
            resizeWithKeyboard: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Used with {@link Editor.Components.ScreenRegionComponent}.
        */
        enum ScreenRegionType {
            /**
            * Render to the entire screen.
            */
            FullFrame,
            /**
            * Render to the capture region.
            */
            Capture,
            /**
            * Render to the preview region.
            */
            Preview,
            /**
            * Render to the safe render region.
            */
            SafeRender,
            /**
            * Render to the round button region.
            */
            RoundButton
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Component for positioning and scaling UI elements relative to screen dimensions.
        */
        class ScreenTransform extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Enable advanced constraint and offset options.
            */
            advanced: boolean
            
            /**
            * Screen-space anchor rectangle for positioning.
            */
            anchor: Editor.Rect
            
            /**
            * Constraints determining how the element responds to screen resizing.
            */
            constraints: Editor.Components.ScreenTransformConstraints
            
            /**
            * Pixel offset from the anchor position.
            */
            offset: Editor.Rect
            
            /**
            * Normalized pivot point for rotation and scaling.
            */
            pivot: vec2
            
            /**
            * Local transform relative to the screen anchor.
            */
            transform: Editor.Transform
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Used with {@link Editor.Components.ScreenTransformConstraints}.
        */
        class ScreenTransformConstraints {
            /**
            * Instantiate a screen transform constraints object for UI element positioning rules.
            */
            constructor()
            
            /**
            * Lock the screen transform height in place.
            */
            fixedHeight: boolean
            
            /**
            * Lock the screen transform width in place.
            */
            fixedWidth: boolean
            
            /**
            * Anchor the screen transform to the bottom edge.
            */
            pinToBottom: boolean
            
            /**
            * Anchor the screen transform to the left edge.
            */
            pinToLeft: boolean
            
            /**
            * Anchor the screen transform to the right edge.
            */
            pinToRight: boolean
            
            /**
            * Anchor the screen transform to the top edge.
            */
            pinToTop: boolean
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Component that runs a script asset.
        
        * @example
        * ```js
        * const scriptComponent = sceneObject.addComponent('ScriptComponent')
        * scriptComponent.scriptAsset = scriptAsset
        * ```
        */
        class ScriptComponent extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Names of the script's input parameters.
            
            * @readonly
            */
            inputNames: string[]
            
            /**
            * Script asset associated with the script component. 
            */
            scriptAsset: Editor.Assets.ScriptAsset
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Enum specifying shadow rendering technique for light sources.
        */
        enum ShadowType {
            /**
            * No shadows rendered.
            */
            None,
            /**
            * Shadows rendered using projective shadow mapping.
            */
            Projective,
            /**
            * Shadows rendered using shadow map technique.
            */
            ShadowMap
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Represents a skeletal rigging component that controls deformation of mesh geometry through bone transformations.
        */
        class Skin extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Collection of bones that influence mesh vertex deformation.
            */
            skinBones: any
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Used with {@link Editor.Components.Canvas}.
        */
        enum SortingType {
            /**
            * Sort child elements by their position in the hierarchy tree.
            */
            Hierarchy,
            /**
            * Sort child elements by their depth value.
            */
            Depth
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Used with {@link Editor.Components.BaseMeshVisual}.
        */
        enum StretchMode {
            /**
            * Scale to fill the area, maintaining aspect ratio and cropping if needed.
            */
            Fill,
            /**
            * Scale to fit within the area, maintaining aspect ratio with letterboxing.
            */
            Fit,
            /**
            * Scale to fill the area, ignoring aspect ratio.
            */
            Stretch,
            /**
            * Scale to match height, maintaining aspect ratio.
            */
            FitHeight,
            /**
            * Scale to match width, maintaining aspect ratio.
            */
            FitWidth,
            /**
            * Scale to fill and crop to exact dimensions.
            */
            FillAndCut
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Defines a mesh vertex stretch point for FaceStretchVisual deformation.
        */
        class StretchPoint {
            /**
            * Create a new StretchPoint instance.
            */
            constructor()
            
            /**
            * The displacement vector applied to the vertex.
            */
            delta: vec3
            
            /**
            * The vertex index in the mesh.
            */
            index: number
            
            /**
            * The blend weight for the stretch effect.
            */
            weight: number
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Configuration for surface rendering options.
        */
        class SurfaceOptions extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Enable native AR enhancement for the surface.
            */
            enhanceWithNativeAR: boolean
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Renders and manages text in the scene with customizable font, size, layout, and visual effects.
        */
        class Text extends Editor.Components.BaseMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Advanced layout configuration for text rendering.
            */
            advancedLayout: Editor.Components.TextAdvancedLayout
            
            /**
            * Background appearance settings for the text.
            */
            backgroundSettings: Editor.Components.BackgroundSettings
            
            /**
            * Override text capitalization style.
            */
            capitalizationOverride: Editor.Components.CapitalizationOverride
            
            /**
            * Enable or disable depth testing for text rendering.
            */
            depthTest: boolean
            
            /**
            * Drop shadow effect settings for the text.
            */
            dropshadowSettings: Editor.Components.DropshadowSettings
            
            /**
            * Enable or disable text editing in preview mode.
            */
            editable: boolean
            
            enableRichText: boolean
            
            /**
            * Font asset used for rendering text.
            */
            font: Editor.Assets.Font
            
            fontSource: (Editor.Assets.FontCollection|Editor.Assets.FontFamily|Editor.Assets.Font)
            
            /**
            * Behavior when text exceeds horizontal bounds.
            */
            horizontalOverflow: Editor.Components.HorizontalOverflow
            
            /**
            * Enable or disable italic text styling.
            */
            italic: boolean
            
            /**
            * Spacing between individual characters.
            */
            letterSpacing: number
            
            /**
            * Spacing between text lines.
            */
            lineSpacing: number
            
            /**
            * Text outline effect settings.
            */
            outlineSettings: Editor.Components.OutlineSettings
            
            /**
            * Show the text editing preview in the editor.
            */
            showEditingPreview: boolean
            
            /**
            * Font size in units.
            */
            size: number
            
            /**
            * Automatically scale text to fit bounds.
            */
            sizeToFit: boolean
            
            /**
            * The text string to render.
            */
            text: string
            
            /**
            * Text color and fill settings.
            */
            textFill: Editor.Components.TextFill
            
            /**
            * Enable or disable touch interaction for text.
            */
            touchHandler: Editor.Components.InteractionComponent
            
            /**
            * Render text on both sides of the plane.
            */
            twoSided: boolean
            
            /**
            * Behavior when text exceeds vertical bounds.
            */
            verticalOverflow: Editor.Components.VerticalOverflow
            
            /**
            * Font weight value.
            */
            weight: number
            
            /**
            * Bounding rectangle of the text in world space.
            */
            worldSpaceRect: Editor.Rect
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * 3D text rendering component with font, layout, and styling options.
        */
        class Text3D extends Editor.Components.MaterialMeshVisual {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Advanced text layout settings.
            */
            advancedLayout: Editor.Components.TextAdvancedLayout
            
            /**
            * Text capitalization style override.
            */
            capitalizationOverride: Editor.Components.CapitalizationOverride
            
            /**
            * Enable editing text content at runtime.
            */
            editable: boolean
            
            /**
            * Optimize rendering by batching geometry.
            */
            enableBatching: boolean
            
            enableRichText: boolean
            
            /**
            * Direction to extrude text geometry.
            */
            extrudeDirection: Editor.Components.ExtrudeDirection
            
            /**
            * Depth value for text extrusion.
            */
            extrusionDepth: number
            
            /**
            * Font asset used for text rendering.
            */
            font: Editor.Assets.Font
            
            fontSource: (Editor.Assets.FontCollection|Editor.Assets.FontFamily|Editor.Assets.Font)
            
            /**
            * Behavior when text exceeds horizontal bounds.
            */
            horizontalOverflow: Editor.Components.HorizontalOverflow
            
            /**
            * Apply italic style to text.
            */
            italic: boolean
            
            /**
            * Space between individual characters.
            */
            letterSpacing: number
            
            /**
            * Space between text lines.
            */
            lineSpacing: number
            
            /**
            * Display text editing preview in editor.
            */
            showEditingPreview: boolean
            
            /**
            * Font size in pixels.
            */
            size: number
            
            /**
            * Automatically scale text to fit bounds.
            */
            sizeToFit: boolean
            
            /**
            * Text string content to render.
            */
            text: string
            
            /**
            * Enable touch input handling on text.
            */
            touchHandler: Editor.Components.InteractionComponent
            
            /**
            * Behavior when text exceeds vertical bounds.
            */
            verticalOverflow: Editor.Components.VerticalOverflow
            
            /**
            * Font weight value.
            */
            weight: number
            
            /**
            * Bounding rectangle in world space.
            */
            worldSpaceRect: Editor.Rect
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Advanced text layout configuration for controlling text appearance and spacing.
        */
        class TextAdvancedLayout extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Override for text capitalization behavior.
            */
            capitalizationOverride: Editor.Components.CapitalizationOverride
            
            /**
            * Screen transform target for text extents.
            */
            extentsTarget: Editor.Components.ScreenTransform
            
            /**
            * Spacing between individual characters.
            */
            letterSpacing: number
            
            /**
            * Spacing between text lines.
            */
            lineSpacing: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Configures fill properties for text rendering.
        */
        class TextFill extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * RGBA color applied to the text.
            */
            color: vec4
            
            /**
            * Determines whether to use solid color or texture fill.
            */
            mode: Editor.Components.TextFillMode
            
            /**
            * Texture used when mode is set to texture fill.
            */
            texture: Editor.Assets.Texture
            
            /**
            * Controls how the texture scales to fit the text bounds.
            */
            textureStretch: Editor.Components.StretchMode
            
            /**
            * Number of times the texture tiles across the text.
            */
            tileCount: number
            
            /**
            * Defines the region of the texture to use for tiling.
            */
            tileZone: Editor.Components.TextFillTileZone
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Text}.  @see {@link LensScripting.Text}.
        */
        enum TextFillMode {
            /**
            * Fill text with a single solid color.
            */
            Solid,
            /**
            * Fill text with a texture.
            */
            Texture
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Specifies the coordinate system for text fill tile positioning.
        */
        enum TextFillTileZone {
            /**
            * Tile coordinates relative to the text bounding rectangle.
            */
            Rect,
            /**
            * Tile coordinates relative to the text extents.
            */
            Extents,
            /**
            * Tile coordinates relative to individual characters.
            */
            Character,
            /**
            * Tile coordinates in screen space.
            */
            Screen
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Canvas}.  @see {@link LensScripting.Canvas}.
        */
        enum UnitType {
            /**
            * World coordinate system units.
            */
            World,
            /**
            * Pixel-based measurement units.
            */
            Pixels,
            /**
            * Point-based measurement units.
            */
            Points
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Settings used with {@link Editor.Components.Text}.  @see {@link LensScripting.Text}.
        */
        enum VerticalOverflow {
            /**
            * Allow text to extend beyond vertical bounds.
            */
            Overflow,
            /**
            * Clip text that exceeds vertical bounds.
            */
            Truncate,
            /**
            * Reduce text size to fit within vertical bounds.
            */
            Shrink
        }
    
    }

}

declare namespace Editor {
    namespace Components {
        /**
        * Base class for visual components that control rendering order and appearance.
        */
        class Visual extends Editor.Components.Component {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Determines the order in which this visual component is rendered relative to others.
            */
            renderOrder: number
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    /**
    * Provides compression and decompression utilities.
    */
    class Compression {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    namespace Compression {
        /**
        * GZip compression utility for packing and unpacking files.
        */
        class GZip {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Compress a source file to a gzipped destination file.
            */
            static pack(srcFile: Editor.Path, destFile: Editor.Path): void
            
            /**
            * Decompress a gzipped source file to a destination file.
            
            * @beta
            */
            static unpack(srcFile: Editor.Path, dstFile: Editor.Path): void
            
        }
    
    }

}

declare namespace Editor {
    namespace Compression {
        /**
        * Module to zip and unzip files. 
        */
        class Zip {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Pack files into a zip. 
            */
            static pack(src: Editor.Path, destFile: Editor.Path): void
            
            /**
            * Unpack the zip file.
            
            * @beta
            */
            static unpack(src: Editor.Path, destDir: Editor.Path): void
            
        }
    
    }

}

declare namespace Editor {
    /**
    * An action in a {@link Editor.IContextActionRegistry}.
    */
    class ContextAction {
        /**
        * Create a new context action.
        */
        constructor()
        
        /**
        * Callback for when the action is executed.
        */
        apply: () => void
        
        /**
        * Caption for the action.
        */
        caption: string
        
        /**
        * Description for the action.
        */
        description: string
        
        /**
        * Section for the action to be in. 
        */
        group: string[]
        
        /**
        * Identifier for the caption. 
        */
        id: string
        
    }

}

declare namespace Editor {
    /**
    * Container for dock panel management functionality.
    */
    class Dock {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    namespace Dock {
        /**
        * Manages the states of Lens Studio panels.
        
        * @example
        * ```js
        * import CoreService from 'LensStudio:CoreService';
        * import * as serialization from 'LensStudio:Serialization';
        
        * export class DockManager extends CoreService {
        *     static descriptor() {
        *         return {
        *             id: 'Snap.Test.DockManager',
        *             name: 'DockManager',
        *             description: 'DockManager',
        *             interfaces: CoreService.descriptor().interfaces,
        *             dependencies: [Editor.Dock.IDockManager]
        *         };
        *     }
        
        *     constructor(pluginSystem) {
        *         super(pluginSystem);
        *         this.guards = [];
        *     }
        
        *     start() {
        *         const layoutStr = 'dock:\n' +
        * d: false\n' +
        *             '  main:\n' +
        *             '    items:\n' +
        *             '      - items:\n';
        
        *         // Simply test that reader and writer can be created and used without throwing
        *         let reader = serialization.Yaml.createReader(layoutStr);
        *         const writer = serialization.Yaml.createWriter();
        
        *         const dockManager = this.pluginSystem.findInterface(Editor.Dock.IDockManager);
        *         dockManager.write(writer);
        *         const writtenContent = writer.getString();
        *         reader = serialization.Yaml.createReader(writtenContent);
        *     }
        
        *     stop() {
        *     }
        * }
        * ```
        */
        class IDockManager extends Editor.IPluginComponent {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Activate a panel in the dock.
            */
            activate(panel: IPanelPlugin): void
            
            /**
            * Activate panels by group ID.
            */
            activatePanels(id: string): void
            
            /**
            * Add a panel to the dock.
            */
            add(panel: IPanelPlugin): void
            
            /**
            * Check if panels with the given group ID exist in the dock.
            */
            containsPanels(id: string): boolean
            
            /**
            * Retrieve a panel by ID.
            */
            findPanel(id: string): IPanelPlugin
            
            /**
            * Highlight a panel in the dock.
            */
            highlight(panel: IPanelPlugin): void
            
            /**
            * Highlight panels by group ID.
            */
            highlightPanels(id: string): void
            
            /**
            * Reads the current state of the DockManager.
            
            * @beta
            */
            read(reader: import('LensStudio:Serialization').IReader): void
            
            /**
            * Remove a panel from the dock.
            */
            remove(panel: IPanelPlugin): void
            
            /**
            * Remove panels by group ID from the dock.
            */
            removePanels(id: string): void
            
            /**
            * Writes to the Dock Manager.
            
            * @beta
            */
            write(writer: import('LensStudio:Serialization').IWriter): void
            
            /**
            * Array of panels currently in the dock.
            
            * @readonly
            */
            panels: IPanelPlugin[]
            
            /**
            * Interface identifier for the dock manager.
            */
            static interfaceId: Editor.InterfaceId
            
        }
    
    }

}

declare namespace Editor {
    class Graph {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    /**
    * Component that allows you to check whether Lens Studio is authorized, as well as get authorization. Requires `snap_auth_token` in the `module.json` of your plugin.
    */
    class IAuthorization extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Initiate the authorization flow.
        */
        authorize(): void
        
        /**
        * The authorization token string from the identity provider.
        
        * @readonly
        */
        idToken: string
        
        /**
        * Current authorization state.
        
        * @readonly
        */
        isAuthorized: boolean
        
        /**
        * Signal that responds to changes in authorization state.
        
        * @readonly
        */
        onAuthorizationChange: signal1<boolean, void>
        
        /**
        * The unique identifier for the IAuthorization interface.
        */
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Editor {
    /**
    * An icon to be used in the Editor UI.
    
    * @example
    * ```js
    * const pathToIconFromPlugin = import.meta.resolve('icon.svg');
    * Editor.Icon.fromFile(pathToIconFromPlugin);
    * ```
    */
    class Icon {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Creates an icon from an SVG file.
        */
        static fromFile(absoluteFilePath: Editor.Path): Editor.Icon
        
        /**
        * Creates an icon from a buffer containing SVG data.
        */
        static fromSvgData(buffer: string): Editor.Icon
        
    }

}

declare namespace Editor {
    /**
    * Editor context passed to context action callbacks when a right-click menu is triggered.
    */
    class IContext extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    /**
    * A registry of {@link Editor.ContextAction} which will be shown in a contextual menu (i.e. right click).
    
    * @example
    * ```js
    * import { CoreService } from 'LensStudio:CoreService';
    
    * export class ContextActionRegistry extends CoreService {
    *     static descriptor() {
    *         return {
    *             id: 'com.example.contextActionRegistry',
    *             name: 'ContextActionRegistry',
    *             description: 'ContextActionRegistry',
    *             interfaces: CoreService.descriptor().interfaces,
    *             dependencies: [Editor.IContextActionRegistry]
    *         };
    *     }
    
    *     constructor(pluginSystem) {
    *         super(pluginSystem);
    *         this.guards = [];
    *     }
    
    *     start() {
    *         const contextActionRegistry = this.pluginSystem.findInterface(Editor.IContextActionRegistry);
    *         this.guards.push(contextActionRegistry.registerAction((context) => {
    *             const action = new Editor.ContextAction();
    *             action.id = 'Test Action Id';
    *             action.caption = 'Test Action Caption';
    *             action.description = 'Test Action Description';
    *             action.group = ['Test Group'];
    *             action.apply = () => {
    *             };
    *             return action;
    *         }));
    *     }
    
    *     stop() {
    *         this.guards = [];
    *     }
    * }
    * ```
    */
    class IContextActionRegistry extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Adds the `action` to the registry.
        */
        registerAction(action: (arg1: Editor.IContext) => Editor): Editor.IGuard
        
        /**
        * Unique identifier for the IContextActionRegistry interface.
        */
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Editor {
    /**
    * Popup window that allows the user to choose specific objects in the Scene hierarchy, or assets in the Asset Browser.
    
    * @example
    * ```js 
    * // Get access to the project's model component 
    * const model = this.pluginSystem.findInterface(Editor.IModel); 
    * const project = model.project;  
    
    * // Get access to the picker component 
    * const refPicker = this.pluginSystem.findInterface(Editor.IEntityPicker);  
    
    * // Open a picker  
    * const type = "SceneObject" 
    
    * // or Asset, etc. 
    * refPicker.requestPicker(type, (pickedReplacementUid) => {
    *     console.log(pickedReplacementUid);
    * })  
    
    * // List assets in project 
    * const assetManager = project.assetManager; 
    * assetManager.assets.forEach( asset => {
    *     console.log(asset.id);
    * })  
    
    * // List objects in project's scene 
    * const scene = project.scene; 
    * scene.sceneObjects.forEach( obj => {
    *     console.log(obj.id);
    * })
    * ```
    */
    class IEntityPicker extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Open a picker dialog for the user to select an entity of the specified type.
        
        * @beta
        */
        requestPicker(entityType: string, callback: (arg1: Editor.Model.Entity) => void): void
        
        /**
        * Interface identifier for IEntityPicker.
        */
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Editor {
    /**
    * Represents ownership of a resource. 
    * If this object is garbage collected, or `dispose()` method is called – the associated resource is freed.
    
    */
    class IGuard extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Free the guarded resource immediately.
        */
        dispose(): void
        
    }

}

declare namespace Editor {
    /**
    * Base interface type for Editor plugin system objects.
    */
    class IInterface extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    /**
    * Unique identifier for plugin interfaces.
    */
    class InterfaceId {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    /**
    * Interface for managing viewport overlays.
    */
    class IOverlayManager extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @beta
        */
        requestShow(overlayID: string): void
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Editor {
    /**
    * Interface for package-level actions.
    */
    class IPackageActions extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        exportAsZip(exportPath: Editor.Path, exportOptions: Editor.Model.ExportOptions, includeCache: boolean): void
        
        exportPackage(nativePackageDescriptor: Editor.Assets.NativePackageDescriptor, path: Editor.Path, exportOptions: Editor.Model.ExportOptions): void
        
        exportScript(scriptAsset: Editor.Assets.ScriptAsset, path: Editor.Path, exportOptions: Editor.Model.ExportOptions): void
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Editor {
    /**
    * Interface for package discovery and registration.
    */
    class IPackageRegistry extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        canPullUpdate(asset: Editor.Assets.Asset): boolean
        
        canPushUpdate(asset: Editor.Assets.Asset): boolean
        
        canRegisterToLibrary(asset: Editor.Assets.Asset): boolean
        
        getLibraryPaths(): Editor.Path[]
        
        getTypeById(uid: import('LensStudio:Uuid').Uuid, entityBaseType: Editor.Model.EntityBaseType): string
        
        getTypeByName(name: string, entityBaseType: Editor.Model.EntityBaseType): string
        
        getTypeByVersion(uid: import('LensStudio:Uuid').Uuid, version: Editor.Assets.Version, entityBaseType: Editor.Model.EntityBaseType): string
        
        isInLibrary(componentId: import('LensStudio:Uuid').Uuid): boolean
        
        isInProject(componentId: import('LensStudio:Uuid').Uuid): boolean
        
        packageMetadata(sourcePath: Editor.Path): Editor.PackageMetadata
        
        pullUpdate(asset: Editor.Assets.Asset): void
        
        pushUpdate(asset: Editor.Assets.Asset, locked: boolean): void
        
        registerToLibrary(asset: Editor.Assets.Asset): void
        
        /**
        * NEW
        */
        selectVersionFromAssetLibrary(descriptor: Editor.Assets.NativePackageDescriptor, asset: import('LensStudio:AssetLibrary').Asset, resource: import('LensStudio:AssetLibrary').Resource): void
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Editor {
    /**
    * Interface representing a plugin.
    */
    class IPlugin extends Editor.IInterface {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @readonly
        */
        id: string
        
    }

}

declare namespace Editor {
    /**
    * Interface for plugin component registration.
    */
    class IPluginComponent extends Editor.IInterface {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    /**
    * The model object is a core concept in the plugin development environment. It serves as a central point for accessing key elements such as the scene, project, and {@link Editor.Model.AssetManager}.  The model object encapsulates the data model representing a Lens Studio project. It brings together environment entities and functionalities that are essential for developing plugins. It plays a role analogous to the "Model" component found in Model-View-Controller architectural patterns, containing both data and business logic.  In order to get the model object, which many key objects are stored within, you need the pluginSystem object which is being passed into the constructor of the plugin class, along with the ID of the model component (which can be accessed through the `Editor` namespace) 
    
    * @example
    * ```js
    * const model = pluginSystem.findInterface(Editor.Model.IModel)
    * const assetManager = model.project.assetManager
    * const scene = model.project.scene
    * ```
    */
    class Model {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Context object holding the current asset selection, providing access to selected assets and their paths.
        */
        class AssetContext extends Editor.IContext {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Read-only array of currently selected asset items in the asset panel.
            
            * @readonly
            */
            selection: Editor.Model.AssetContext.Item[]
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        namespace AssetContext {
            /**
            * Represents a single selected asset entry, pairing an asset reference with its file path.
            */
            class Item {
                
                /** @hidden */
                protected constructor()
                
                /**
                * The asset associated with this context item.
                
                * @readonly
                */
                asset: Editor.Assets.Asset
                
                /**
                * The path of the asset within the context.
                
                * @readonly
                */
                path: Editor.Path
                
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * A handle for the metadata of an asset. 
        
        * @example
        * ```js
        * // Get an asset by either finding an already imported one, or importing it.
        * export function findOrCreate(assetManager, absolutePath) {
        *     let meta = assetManager.findImportedCopy(absolutePath);
        *     if (meta) {
        *         return meta.primaryAsset;
        *     }
        
        *     meta = assetManager.importExternalFile(absolutePath);
        *     return meta.primaryAsset;
        * }
        * ```
        
        */
        class AssetImportMetadata extends Editor.Model.Entity {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Retrieves a string value from the extra data store by key.
            */
            getExtraDataItem(key: string): string
            
            /**
            * Returns child AssetImportMetadata entries within the native package, using the specified iteration depth.
            */
            getNativePackageItems(iterateOption: Editor.Model.AssetImportMetadata.PackageIterate): Editor.Model.AssetImportMetadata[]
            
            /**
            * Stores a string value in the extra data store under the given key.
            */
            setExtraDataItem(key: string, value: string): void
            
            /**
            * Source path of this asset within the asset tree.
            
            * @readonly
            */
            assetTreePath: Editor.Model.SourcePath
            
            /**
            * A list of all the available assets this handle contains.
            
            * @readonly
            */
            assets: Editor.Assets.Asset[]
            
            compressionSettings: Editor.Assets.AssetCompressionSettings
            
            /**
            * Indicates whether this item is packed inside a native package.
            
            * @readonly
            */
            isPackedPackageItem: boolean
            
            /**
            * Descriptor identifying the native package associated with this import metadata.
            
            * @readonly
            */
            nativePackageDescriptor: Editor.Assets.NativePackageDescriptor
            
            /**
            * Root AssetImportMetadata entry of the native package containing this item.
            
            * @readonly
            */
            nativePackageRoot: Editor.Model.AssetImportMetadata
            
            /**
            * The primary asset of this handle. Usually, this is the asset you will assign after accessing an asset.
            
            * @readonly
            */
            primaryAsset: Editor.Assets.Asset
            
            /**
            * The source file where the asset was imported from.
            
            * @readonly
            */
            sourcePath: Editor.Path
            
            /**
            * Topmost root AssetImportMetadata in the native package hierarchy.
            
            * @readonly
            */
            topmostNativePackageRoot: Editor.Model.AssetImportMetadata
            
            /**
            * Returns the static metadata descriptor for the AssetImportMetadata type.
            */
            static staticMeta(): Editor.Model.Meta
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        namespace AssetImportMetadata {
            /**
            * Enum controlling whether native package iteration is shallow or deep.
            */
            enum PackageIterate {
                /**
                * Iterates only the top-level contents of a package.
                */
                Shallow,
                /**
                * Iterates all nested contents of a package recursively.
                */
                Deep
            }
        
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Manages project assets — creating, importing, finding, and organizing assets within the project.
        */
        class AssetManager extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Creates a new native asset of the specified type at the given destination path and returns it.
            */
            createNativeAsset(assetType: string, baseName: string, relativeDestinationDir: Editor.Model.SourcePath): Editor.Assets.Asset
            
            /**
            * Packages a set of assets into a single package file at the specified destination and returns the resulting import metadata.
            */
            createPackage(requestedAssets: Editor.Model.AssetImportMetadata[], relativeDestinationDir: Editor.Model.SourcePath, packageName: string, packageOption: Editor.Model.PackageOption): Editor.Model.AssetImportMetadata
            
            /**
            * Exports the specified assets to an absolute destination path and returns metadata for the exported assets.
            */
            exportAssets(requestedAssets: Editor.Model.AssetImportMetadata[], absoluteDestination: Editor.Path): Editor.Model.AssetImportMetadata[]
            
            /**
            * Exports top-level scene objects as assets to an absolute destination path and returns the resulting import metadata.
            */
            exportSceneObjects(topLevelSceneObjects: Editor.Model.SceneObject[], absoluteDestination: Editor.Path): Editor.Model.AssetImportMetadata[]
            
            /**
            * Finds an existing imported copy of a file by its absolute source path, optionally scoped to a destination directory.
            */
            findCopyOrImport(absoluteSourcePath: Editor.Path, relativeDestinationDir?: Editor.Model.SourcePath, options?: any): Editor.Model.AssetImportMetadata
            
            /**
            * Find a copy, if it exists, of a file. 
            */
            findImportedCopy(absoluteSourcePath: Editor.Path, relativeDestinationDir?: Editor.Model.SourcePath, options?: any): Editor.Model.AssetImportMetadata
            
            /**
            * Returns import metadata for the asset at the given relative file path.
            */
            getFileMeta(relativeFilePath: Editor.Model.SourcePath): Editor.Model.AssetImportMetadata
            
            /**
            * Imports an external file into the project synchronously and returns its import metadata.
            */
            importExternalFile(absoluteSourcePath: Editor.Path, relativeDestinationDir?: Editor.Model.SourcePath, resultType?: Editor.Model.ResultType, importSettings?: Editor.Model.ImportSettings): Editor.Model.ImportResult
            
            /**
            * Imports an external file into the project asynchronously and returns a promise resolving to its import metadata.
            */
            importExternalFileAsync(absoluteSourcePath: Editor.Path, relativeDestinationDir?: Editor.Model.SourcePath, resultType?: Editor.Model.ResultType, importSettings?: Editor.Model.ImportSettings): Promise<Editor.Model.ImportResult>
            
            /**
            * Instantiates an asset into the scene and returns the resulting scene object.
            */
            instantiate(assets: Editor.Assets.Asset[], params?: Editor.Model.InstantiationParams): Promise<Editor.Model.Prefabable[]>
            
            /**
            * Moves an asset to a new destination path within the project.
            */
            move(fileMeta: Editor.Model.AssetImportMetadata, relativeDestinationDir: Editor.Model.SourcePath): void
            
            /**
            * Removes an asset from the project.
            */
            remove(relativeFilePath: Editor.Model.SourcePath): void
            
            /**
            * Renames an asset to the specified name.
            */
            rename(fileMeta: Editor.Model.AssetImportMetadata, newName: string): void
            
            /**
            * Saves a scene object as a new prefab asset at the specified destination.
            */
            saveAsPrefab(sceneObject: Editor.Model.SceneObject, relativeDestinationDir: Editor.Model.SourcePath, preferredName?: string): Editor.Assets.ObjectPrefab
            
            /**
            * Saves a scene object as a variant of an existing prefab asset.
            */
            saveAsPrefabVariant(sceneObject: Editor.Model.SceneObject, relativeDestinationDir: Editor.Model.SourcePath, preferredName?: string): Editor.Assets.ObjectPrefab
            
            /**
            * Unpacks a packaged asset, extracting its contents into the project.
            */
            unpack(nativePackageRoot: Editor.Model.AssetImportMetadata): Promise<Editor.Model.ImportResult>
            
            /**
            * Array of all assets currently loaded in the project.
            
            * @readonly
            */
            assets: Editor.Assets.Asset[]
            
            /**
            * Absolute path to the project's assets directory.
            
            * @readonly
            */
            assetsDirectory: Editor.Path
            
            /**
            * Absolute path to the project's asset cache directory.
            
            * @readonly
            */
            cacheDirectory: Editor.Path
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Stores metadata for an asset, including type information and associated properties.
        */
        class AssetMeta extends Editor.Model.InspectableMeta {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Indicates whether the asset is a native (built-in) asset.
            
            * @readonly
            */
            isNative: boolean
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Base class for streams that track and apply model changes.
        */
        class BaseChangesStream extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Executes a set of changes grouped under a named operation for undo/redo purposes.
            */
            executeAsGroup(name: string, change: () => void): void
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Enum representing the target device type for a Lens Studio project.
        */
        enum DeviceType {
            /**
            * Device type is unrecognized or not set.
            */
            Unknown,
            /**
            * Targets a mobile device.
            */
            Mobile,
            /**
            * Targets Spectacles wearable hardware.
            */
            Spectacles,
            /**
            * Targets a desktop platform.
            */
            Desktop
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * An object in the scene, or asset in the {@link Editor.Model.AssetManager}
        */
        class Entity extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            /**
            * A list of entities which this entity has a reference to.
            */
            getDirectlyReferencedEntities(): Editor.Model.Entity[]
            
            /**
            * A list of entities which has a reference to this entity.
            */
            getOwnedEntities(): Editor.Model.Entity[]
            
            /**
            * The unique id of the entity.
            
            * @readonly
            */
            id: import('LensStudio:Uuid').Uuid
            
            /**
            * Metadata associated with this entity, providing access to its unique identifier and other descriptive properties.
            
            * @readonly
            */
            meta: Editor.Model.Meta
            
            /**
            * The entity's type. 
            
            * @readonly
            */
            type: string
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Enum defining the base types an entity prototype can represent.
        
        * @beta
        */
        enum EntityBaseType {
            /**
            * Identifies the entity as a component type.
            
            * @beta
            */
            Component,
            /**
            * Identifies the entity as an asset type.
            
            * @beta
            */
            Asset
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Defines prototype data for an entity type, including its display metadata and factory function.
        */
        class EntityPrototypeData {
            /**
            * Constructs a new EntityPrototypeData instance representing a prototype definition for a scene entity.
            */
            constructor()
            
            /**
            * The base entity type string this prototype derives from.
            */
            baseEntityType: string
            
            /**
            * Display name shown for the entity type in the UI.
            */
            caption: string
            
            /**
            * Factory function or callable used to instantiate the entity.
            */
            creator: (any|any)
            
            /**
            * Unique string identifier for this entity type.
            */
            entityType: string
            
            /**
            * Icon associated with this entity type in the editor.
            */
            icon: Editor.Icon
            
            /**
            * Section or category grouping this entity type belongs to.
            */
            section: string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Entity subclass representing the structural organization of entities within a scene.
        */
        class EntityStructure extends Editor.Model.Entity {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Options controlling how a model is exported, including dependency handling and packaging policy.
        */
        class ExportOptions {
            /**
            * Constructs a new ExportOptions instance with default export configuration values.
            */
            constructor()
            
            /**
            * List of external package dependencies required by the exported model.
            */
            externalDependencies: Editor.Model.ExternalPackageDependency[]
            
            /**
            * Policy determining how packages are handled during export.
            */
            packagePolicy: Editor.Assets.PackagePolicy
            
            pluginsToInclude: Editor.Path[]
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Represents an external package dependency, including its import metadata and version configuration.
        */
        class ExternalPackageDependency {
            /**
            * Constructs an ExternalPackageDependency instance representing a dependency on an external package.
            */
            constructor()
            
            /**
            * Import metadata associated with the external package's file.
            */
            fileMeta: Editor.Model.AssetImportMetadata
            
            /**
            * Whether this dependency should be bundled into the package.
            */
            includeInPackage: boolean
            
            /**
            * Version string that overrides the default resolved version of the dependency.
            */
            versionOverride: string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Enum of options controlling model lookup behavior.
        */
        enum FindOption {
            /**
            * Flag indicating that modified (unsaved) models should be included in find results.
            */
            AcceptModified
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Registry for entity prototypes, providing methods to create, query, and register entity types within the Editor model.
        */
        class IEntityPrototypeRegistry extends Editor.IPluginComponent {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Creates a new entity of the specified type within the given context, invoking a callback with the created entity.
            
            * @beta
            */
            createEntity(entityType: string, context: (Editor.Path|Editor.Model.Entity), callback: (arg1: Editor.Model.Entity) => void): void
            
            /**
            * Returns the display caption string for the given entity type identifier.
            
            * @beta
            */
            getCaptionForType(type: string): string
            
            /**
            * Returns an array of entity type strings matching the given base type and acceptance predicate.
            */
            getEntityTypes(baseType: string, acceptsType: (arg1: string) => any): string[]
            
            /**
            * Returns the icon associated with the given entity type identifier.
            
            * @beta
            */
            getIconForType(type: string): Editor.Icon
            
            /**
            * Registers a new entity prototype from the provided prototype data and returns a guard managing the registration lifetime.
            */
            registerEntityPrototype(prototypeData: Editor.Model.EntityPrototypeData): Editor.IGuard
            
            /**
            * Unique identifier string for the IEntityPrototypeRegistry interface.
            */
            static interfaceId: Editor.InterfaceId
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * A registry of various entities. 
        
        * @example
        * ```js
        * // Get a list of abstract entities
        * const entityRegistry = pluginSystem.findInterface(Editor.Model.IEntityRegistry);
        * const abstractFilter = (entityType) => {
        *     return entityRegistry.getMeta(entityType).isAbstract;
        * };
        * ```
        */
        class IEntityRegistry extends Editor.IPluginComponent {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Get the metadata of an entity.
            */
            getMeta(entityType: string): Editor.Model.Meta
            
            /**
            * Unique identifier for the IEntityRegistry interface, used to look up this component via findInterface.
            */
            static interfaceId: Editor.InterfaceId
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Core plugin component interface providing access to the current Lens Studio project and its lifecycle events.
        */
        class IModel extends Editor.IPluginComponent {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Opens a project at the given file system path.
            */
            openProject(path: Editor.Path): void
            
            /**
            * Loads the default template project.
            */
            setDefaultProject(): void
            
            /**
            * Loads a blank empty project.
            */
            setEmptyProject(): void
            
            /**
            * Signal fired when project meta information changes.
            
            * @readonly
            */
            onMetaInfoChanged: signal0<void>
            
            /**
            * Signal fired just before the active project is replaced.
            
            * @readonly
            */
            onProjectAboutToBeChanged: signal0<void>
            
            /**
            * Signal fired after a new project has been loaded and is ready.
            
            * @readonly
            */
            onProjectChanged: signal0<void>
            
            /**
            * Signal fired when the project is about to be saved.
            
            * @readonly
            */
            onProjectSaving: signal2<Editor.Model.ProjectSaveMode, Editor.Path, void>
            
            /**
            * The currently loaded project instance, providing access to its scene and asset manager.
            
            * @readonly
            */
            project: Editor.Model.Project
            
            /**
            * Unique identifier for this interface, used when resolving it via the plugin system.
            */
            static interfaceId: Editor.InterfaceId
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The result of {@link Editor.Model.AssetManager.importExternalFile} and {@link Editor.Model.AssetManager.importExternalFileAsync}.
        */
        class ImportResult {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The metadata of the files imported.
            
            * @readonly
            */
            files: Editor.Model.AssetImportMetadata[]
            
            /**
            * A path to the imported file.
            
            * @readonly
            */
            path: Editor.Path
            
            /**
            * The asset which is usually referenced after the asset has been imported.
            
            * @readonly
            */
            primary: Editor.Assets.Asset
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Settings object describing how a model import operation was configured.
        
        * @beta
        */
        class ImportSettings {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Whether the import operation was aborted before completion.
            
            * @readonly
            
            * @beta
            */
            aborted: boolean
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Metadata for an inspectable object, providing display caption and icon for use in the Editor UI.
        */
        class InspectableMeta extends Editor.Model.Meta {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Read-only string label displayed for this inspectable in the Editor.
            
            * @readonly
            */
            caption: string
            
            /**
            * Read-only icon associated with this inspectable in the Editor UI.
            
            * @readonly
            */
            icon: Editor.Icon
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Parameters used when instantiating a scene object, including its parent hierarchy.
        */
        class InstantiationParams {
            
            /** @hidden */
            protected constructor()
            
            /**
            * List of SceneObject parents to assign during instantiation.
            */
            parents: Editor.Model.SceneObject[]
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The layers within a {@link Editor.Model.LayerSet}.
        */
        class Layer {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The id of this layer.
            */
            id: Editor.Model.LayerId
            
            /**
            * The name of the layer.
            */
            name: string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The id of a {@link Editor.Model.Layer}.
        */
        class LayerId {
            /**
            * Constructs a new LayerId instance.
            */
            constructor(value: number)
            
            /**
            * Iterates over all LayerId values, invoking the predicate for each.
            */
            static forEach(predicate: (arg1: Editor.Model.LayerId) => void): void
            
            /**
            * Iterates over all user-defined LayerId values, invoking the predicate for each.
            */
            static forEachUser(predicate: (arg1: Editor.Model.LayerId) => void): void
            
            /**
            * The default layer in a Lens.
            */
            static Default: Editor.Model.LayerId
            
            /**
            * The maximum user of a layer.
            */
            static MaxUser: Editor.Model.LayerId
            
            /**
            * The minimum user of a layer.
            */
            static MinUser: Editor.Model.LayerId
            
            /**
            * The layer which is used by the Orthographic camera by default.
            */
            static Ortho: Editor.Model.LayerId
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The layers of a {@Editor.Assets.Scene}.
        */
        class Layers extends Editor.Model.Entity {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Add `layerId` to this entity.
            */
            add(layerId: Editor.Model.LayerId): Editor.Model.Layer
            
            /**
            * Whether the layers contain `layerId`.
            */
            contains(layerId: Editor.Model.LayerId): boolean
            
            /**
            * Get the layer with `layerId` if possible.
            */
            find(layerId: Editor.Model.LayerId): Editor.Model.Layer | undefined
            
            /**
            * Remove `layerId` from this entity.
            */
            remove(layerId: Editor.Model.LayerId): void
            
            /**
            * Check if another layer can be added to this entity.
            
            * @readonly
            */
            canAdd: boolean
            
            /**
            * The LayerSet which represents this entity.
            
            * @readonly
            */
            combinedIds: Editor.Model.LayerSet
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Represents an immutable set of scene layers, supporting set operations like union, intersection, and difference.
        */
        class LayerSet {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Returns true if this set contains all layers in the given LayerSet.
            */
            contains(other: Editor.Model.LayerSet): boolean
            
            /**
            * Returns a new LayerSet with all layers from the given set removed.
            */
            except(other: Editor.Model.LayerSet): Editor.Model.LayerSet
            
            /**
            * Returns a new LayerSet containing only layers present in both sets.
            */
            intersect(other: Editor.Model.LayerSet): Editor.Model.LayerSet
            
            /**
            * Returns true if this set contains no layers.
            */
            isEmpty(): boolean
            
            /**
            * Returns an array of all LayerId values in this set.
            */
            toArray(): Editor.Model.LayerId[]
            
            /**
            * Returns a new LayerSet combining all layers from both sets.
            */
            union(other: Editor.Model.LayerSet): Editor.Model.LayerSet
            
            /**
            * The underlying bitmask representing the set of active layers.
            
            * @readonly
            */
            mask: number
            
            /**
            * Returns the collection of predefined layer identifiers.
            */
            static PredefinedIds(): Editor.Model.LayerSet
            
            /**
            * Creates a LayerSet from a single bit index.
            */
            static fromBit(bit: number): Editor.Model.LayerSet
            
            /**
            * Creates a LayerSet from a single LayerId.
            */
            static fromId(layerId: Editor.Model.LayerId): Editor.Model.LayerSet
            
            /**
            * Creates a LayerSet from a raw bitmask value.
            */
            static fromMask(mask: number): Editor.Model.LayerSet
            
            /**
            * A LayerSet containing all available layers.
            */
            static All: Editor.Model.LayerSet
            
            /**
            * An empty LayerSet containing no layers.
            */
            static None: Editor.Model.LayerSet
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The various cameras which will be activated when this project's Lens turns on.
        */
        enum LensActivationCamera {
            /**
            * Opens the front camera by default.
            */
            Front,
            /**
            * Opens the back camera by default.
            */
            Rear
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The various contexts in which this Lens can be used.
        */
        enum LensApplicability {
            /**
            * Lens is usable on the front camera.
            */
            Front,
            /**
            * Lens is usable on the back camera.
            */
            Back
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        enum LensClientCompatibility {
            Mobile,
            Web,
            Spectacles,
            CameraKit
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * The metadata of an entity.
        */
        class Meta extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Whether the entity can be created.
            
            * @readonly
            */
            isAbstract: boolean
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Metadata of the current project's Lens.
        */
        class MetaInfo {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Sets the `icon` as the Lens' icon.
            */
            setIcon(externalPath: Editor.Path): void
            
            setVideoPreview(externalPath: Editor.Path): void
            
            /**
            * The camera which will be activated when this Lens is turned on. 
            */
            activationCamera: Editor.Model.LensActivationCamera
            
            /**
            * The absolute path to the Lens Icon.
            
            * @readonly
            */
            iconPath: Editor.Path
            
            /**
            * Whether an Lens icon has been set.
            
            * @readonly
            */
            isIconSet: boolean
            
            /**
            * Where the Lens can be used.
            */
            lensApplicability: Editor.Model.LensApplicability[]
            
            lensClientCompatibilities: Editor.Model.LensClientCompatibility[]
            
            /**
            * The publicly visible name of the Lens.
            */
            lensName: string
            
            /**
            * @readonly
            */
            videoPreviewPath: Editor.Path
            
            /**
            * Checks whether the Lens Name is valid. See Project Info guide to learn more.
            */
            static isLensNameValid(lensName: string): boolean
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Context scoped to a set of scene objects, providing access to the current object selection.
        */
        class ObjectContext extends Editor.IContext {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Read-only array of currently selected SceneObjects in this context.
            
            * @readonly
            */
            selection: Editor.Model.SceneObject[]
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Enum representing the packaging state of an asset or resource.
        */
        enum PackageOption {
            /**
            * Asset is bundled into a package.
            */
            Packed,
            /**
            * Asset remains as separate, unpacked files.
            */
            Unpacked
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * An entity which can be turned into a prefab, such as {@link Editor.Model.SceneObject}. 
        */
        class Prefabable extends Editor.Model.Entity {
            
            /** @hidden */
            protected constructor()
            
            static getMeta(): Editor.Model.Meta
            
            static getTypeName(): string
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Represents the open Lens Studio project, providing access to the scene, asset manager, and project settings.
        */
        class Project extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Returns a signal that fires after an entity of the given type name has been added to the project.
            */
            onEntityAdded(typeName: string): signal1<Editor.Model.Entity, void>
            
            /**
            * Returns a signal that fires just before an entity of the given type name is added to the project.
            */
            onEntityAdding(typeName: string): signal1<Editor.Model.Entity, void>
            
            /**
            * Returns a signal that fires after an entity of the given type name has been removed, providing its UUID.
            */
            onEntityRemoved(typeName: string): signal1<import('LensStudio:Uuid').Uuid, void>
            
            /**
            * Returns a signal that fires after an entity of the given type name has been updated.
            */
            onEntityUpdated(typeName: string): signal1<Editor.Model.Entity, void>
            
            /**
            * Returns a signal that fires just before an entity of the given type name is updated.
            */
            onEntityUpdating(typeName: string): signal1<Editor.Model.Entity, void>
            
            /**
            * Saves the project to its current file location.
            */
            save(): void
            
            /**
            * Saves the project to a specified file path.
            */
            saveTo(absoluteFilePath: Editor.Path): void
            
            /**
            * The asset manager for this project, used to create, find, and manage all project assets.
            
            * @readonly
            */
            assetManager: Editor.Model.AssetManager
            
            /**
            * Path to the project's assets directory on disk.
            
            * @readonly
            */
            assetsDirectory: Editor.Path
            
            /**
            * Path to the project's cache directory on disk.
            
            * @readonly
            */
            cacheDirectory: Editor.Path
            
            /**
            * The undo/redo history stack for this project.
            
            * @readonly
            */
            history: any
            
            /**
            * Metadata associated with the project, such as name and version info.
            */
            metaInfo: Editor.Model.MetaInfo
            
            /**
            * Root directory path of the project on disk.
            
            * @readonly
            */
            projectDirectory: Editor.Path
            
            /**
            * Path to the project's main file on disk.
            
            * @readonly
            */
            projectFile: Editor.Path
            
            /**
            * The active scene for this project, containing all scene objects and cameras.
            
            * @readonly
            */
            scene: Editor.Assets.Scene
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Enum controlling how and when a project is saved.
        */
        enum ProjectSaveMode {
            /**
            * Standard save mode triggered by user action.
            */
            Default,
            /**
            * Automatic save mode that persists changes without user intervention.
            */
            Autosave
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * How a file should be imported into the project.
        */
        enum ResultType {
            /**
            * Lens Studio will decide how the file will be imported. 
            */
            Auto,
            /**
            * The imported entities will be readonly. However, the entity cann also be updated from source file.
            */
            Packed,
            /**
            * The entity is unpacked and the entities within exists as if it was imported individually.
            */
            Unpacked
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * A node in the scene hierarchy, holding components and child scene objects.
        */
        class SceneObject extends Editor.Model.Prefabable {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Add a scene object as a child of this object at a specified `pos`.
            */
            addChildAt(value: Editor.Model.SceneObject, pos?: number): void
            
            /**
            * Add a new {@link Editor.Components.Component} by componentType to this object.
            */
            addComponent<K extends keyof ComponentNameMap>(componentType: K): ComponentNameMap[K]
            
            /**
            * Add the component `value` at the specified `pos`.
            */
            addComponentAt(value: Editor.Components.Component, pos?: number): void
            
            /**
            * Remove all children from this object.
            */
            clearChildren(): void
            
            /**
            * Remove all components from this scene object.
            */
            clearComponents(): void
            
            /**
            * Returns a deep copy of this scene object, including its children and components.
            */
            copy(): Editor.Model.SceneObject
            
            /**
            * Destroy this scene object. All references to it becomes invalid.
            */
            destroy(): void
            
            /**
            * Get a specific object at the specified `pos`.
            */
            getChildAt(pos: number): Editor.Model.SceneObject
            
            /**
            * Get the number of children on this object.
            */
            getChildrenCount(): number
            
            /**
            * Get the first component of `componentType`.
            */
            getComponent<K extends keyof ComponentNameMap>(componentType: K): ComponentNameMap[K]
            
            /**
            * Get the component at the specified `pos`.
            */
            getComponentAt(pos: number): Editor.Components.Component
            
            /**
            * Get all the components of `componentType` on this object.
            */
            getComponents<K extends keyof ComponentNameMap>(componentType: K): ComponentNameMap[K][]
            
            /**
            * Get the number of components on this object.
            */
            getComponentsCount(): number
            
            /**
            * Get the parent of this scene object.
            */
            getParent(): Editor.Model.SceneObject
            
            /**
            * Get the position of a specific object, if the object is a child of this object.
            */
            indexOfChild(value: Editor.Model.SceneObject): number | undefined
            
            /**
            * Get the position of a specific component `value` on this object. 
            */
            indexOfComponent(value: Editor.Components.Component): number | undefined
            
            /**
            * Move `child` in the order of children on this object.
            */
            moveChild(child: Editor.Model.SceneObject, destination: number): void
            
            /**
            * Move the component `value` to a specified `pos`.
            */
            moveComponent(origin: number, destination: number): void
            
            /**
            * Remove a child from this from this scene object.
            */
            removeChild(child: Editor.Model.SceneObject): void
            
            /**
            * Remove a child at the specified `pos`.
            */
            removeChildAt(pos: number): void
            
            /**
            * Remove the first component of `componentType` from this object.
            */
            removeComponent(componentType: string): boolean
            
            /**
            * Remove the components at the specified `pos`.
            */
            removeComponentAt(pos: number): void
            
            /**
            * Set the child scene object `value` to be at the specified `pos`.
            */
            setChildAt(pos: number, value: Editor.Model.SceneObject): void
            
            /**
            * Set the component `value` to be at the specified `pos`.
            */
            setComponentAt(pos: number, value: Editor.Components.Component): void
            
            /**
            * Set the parent of this scene object.
            */
            setParent(newParent: Editor.Model.SceneObject, position?: number): void
            
            /**
            * A list of scene objects that is a child of this scene object.
            */
            children: Editor.Model.SceneObject[]
            
            /**
            * A list of components that is a child of this scene object.
            */
            components: Editor.Components.Component[]
            
            /**
            * Whether this scene object is enabled or disabled.
            */
            enabled: boolean
            
            /**
            * Whether this scene object contains any component which is of type `Editor.Components.Visual`.
            
            * @readonly
            */
            hasVisuals: boolean
            
            /**
            * The layerSet this scene object is on.
            */
            layers: Editor.Model.LayerSet
            
            /**
            * The transform of this scene object relative to its parent.
            */
            localTransform: Editor.Model.TransformEntity
            
            /**
            * The name of the scene object.
            */
            name: string
            
            /**
            * The root owner object at the top of this object's ownership chain.
            
            * @readonly
            */
            topOwner: Editor.Assets.ObjectOwner
            
            /**
            * The transform of this scene object relative to the scene its in.
            */
            worldTransform: Editor.Model.WorldTransformAccessor
            
            /**
            * Returns the nearest common ancestor shared by a set of scene objects.
            */
            static commonParent(sceneObjects: Editor.Model.SceneObject[]): Editor.Model.SceneObject
            
            /**
            * Returns the static metadata descriptor for the SceneObject type.
            */
            static staticMeta(): Editor.Model.Meta
            
            /**
            * Returns the topmost ancestor of this object in the scene hierarchy.
            */
            static topLevel(sceneObjects: Editor.Model.SceneObject[]): Editor.Model.SceneObject[]
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Represents a file path within a Lens Studio project, combining a root-relative path with a source root directory.
        */
        class SourcePath {
            /**
            * Constructs a SourcePath specifying a relative path and root directory within the asset file system.
            */
            constructor(relativeToRoot: Editor.Path, rootDirectory: Editor.Model.SourceRootDirectory)
            
            /**
            * Returns true if the path's file extension matches the given extension string.
            */
            hasExtension(extension: string): boolean
            
            /**
            * Returns a new SourcePath with the file name base replaced by the given string.
            */
            replaceFileNameBase(newBaseName: string): Editor.Model.SourcePath
            
            /**
            * Returns the full path as a string.
            */
            toString(): string
            
            /**
            * File extension of the path, including the leading dot.
            
            * @readonly
            */
            extension: string
            
            /**
            * File name portion of the path as an Editor.Path.
            
            * @readonly
            */
            fileName: Editor.Path
            
            /**
            * File name without extension.
            
            * @readonly
            */
            fileNameBase: string
            
            /**
            * True if the path is empty or unset.
            
            * @readonly
            */
            isEmpty: boolean
            
            /**
            * Parent directory of the path as a SourcePath.
            
            * @readonly
            */
            parent: Editor.Model.SourcePath
            
            /**
            * Path relative to the project root.
            
            * @readonly
            */
            relativeToProject: Editor.Path
            
            /**
            * Path relative to the source root directory.
            
            * @readonly
            */
            relativeToRoot: Editor.Path
            
            /**
            * Source root directory this path is anchored to.
            
            * @readonly
            */
            rootDirectory: Editor.Path
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Enum identifying the root directory context for resolving source paths within a Lens Studio project.
        */
        enum SourceRootDirectory {
            /**
            * Represents the Assets root directory, where project asset files are stored.
            */
            Assets,
            /**
            * Represents the Packages root directory, where package-level assets and dependencies are stored.
            */
            Packages
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Entity that carries a spatial transform, representing position, rotation, and scale in the scene.
        */
        class TransformEntity extends Editor.Model.EntityStructure {
            
            /** @hidden */
            protected constructor()
            
            /**
            * World or local position of the entity as a vec3.
            */
            position: vec3
            
            /**
            * World or local rotation of the entity as Euler angles vec3.
            */
            rotation: vec3
            
            /**
            * World or local scale of the entity as a vec3.
            */
            scale: vec3
            
        }
    
    }

}

declare namespace Editor {
    namespace Model {
        /**
        * Provides read and write access to an entity's world-space transform.
        */
        class WorldTransformAccessor extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            /**
            * World-space position of the object as a vec3.
            */
            position: vec3
            
            /**
            * World-space rotation of the object in Euler angles as a vec3.
            */
            rotation: vec3
            
            /**
            * World-space scale of the object as a vec3.
            */
            scale: vec3
            
        }
    
    }

}

declare namespace Editor {
    /**
    * Metadata information about a package.
    */
    class PackageMetadata {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Asset identifier string for the package.
        */
        assetId: string
        
        /**
        * List of file paths included in the package.
        */
        filePaths: string[]
        
        /**
        * Display name of the package.
        */
        name: string
        
        /**
        * Tags associated with the package for categorization or search.
        */
        tags: string[]
        
        /**
        * Unique identifier (UUID) for the package.
        */
        uid: import('LensStudio:Uuid').Uuid
        
        /**
        * Major version number of the package.
        */
        versionMajor: number
        
        /**
        * Minor version number of the package.
        */
        versionMinor: number
        
        /**
        * Patch version number of the package.
        */
        versionPatch: number
        
    }

}

declare namespace Editor {
    /**
    * A path in the filesystem, or Asset Manager. Useful for things like importing files into Lens Studio through the {@link Editor.Model.AssetManager}. 
    
    * @example
    * ```js
    * // Get access to the project's assetManager
    * const model = this.pluginSystem.findInterface(Editor.Model.IModel);
    * const assetManager = model.project.assetManager;
    
    * // Locate the shader pass we want to import
    * const resourceLoc = import.meta.resolve('Resources/myMesh.ss_graph');
    * const absGraphPath = new Editor.Path(resourceLoc);
    
    * // Import the shader pass
    * const pathInAssetManager = new Editor.Path('');
    * const meta = await assetManager.importExternalFileAsync(absolutePath, pathInAssetManager, Editor.Model.ResultType.Packed);
    * ```
    */
    class Path {
        /**
        * Construct a new path object.
        */
        constructor(str: string)
        
        /**
        * Returns a new path object relative to the `rootPath`.
        */
        appended(path: Editor.Path): Editor.Path
        
        /**
        * Whether the path object has a file extension in the end.
        */
        hasExtension(extension: string): boolean
        
        /**
        * Whether the current path is inside `directory`. 
        */
        isInside(directory: Editor.Path): boolean
        
        /**
        * Returns a new path object relative to the `rootPath`.
        */
        relative(rootPath: Editor.Path): Editor.Path
        
        /**
        * Rename the extension of the file. 
        */
        replaceExtension(newExtension: string): Editor.Path
        
        /**
        * Returns a new path with the file name base replaced by the given string, preserving extension and directory.
        */
        replaceFileNameBase(name: string): Editor.Path
        
        /**
        * Returns the current path as a string.
        */
        toString(): string
        
        /**
        * The extension of the file of the current path object (without dot).
        
        
        * @readonly
        */
        extension: string
        
        /**
        * The name of the file, including its extension, in the current path object.
        
        * @readonly
        */
        fileName: Editor.Path
        
        /**
        * The name of the file, without its extension, in the current path object.
        
        * @readonly
        */
        fileNameBase: string
        
        /**
        * Whether the path string is empty.
        
        * @readonly
        */
        isEmpty: boolean
        
        /**
        * A path to the parent folder of the current path object.
        
        * @readonly
        */
        parent: Editor.Path
        
        /**
        * Returns true if this path is equal to the given path.
        */
        static equals(lhs: Editor.Path, rhs: Editor.Path): boolean
        
    }

}

declare namespace Editor {
    /**
    * Enumeration of animation playback modes.
    */
    enum PlaybackMode {
        /**
        * Plays the animation once and stops at the last frame.
        */
        Single,
        /**
        * Plays the animation repeatedly from the beginning after each cycle.
        */
        Loop,
        /**
        * Plays the animation forward then in reverse, alternating each cycle.
        */
        PingPong
    }

}

declare namespace Editor {
    /**
    * Provides access to the Lens Studio editor plugins, components, and interfaces
    
    * @example
    * ```js
    * import { Preset } from 'LensStudio:Preset';
    
    * export class ObjectPrefabPreset extends Preset {
    *     static descriptor() {
    *         return {
    *             id: 'Com.Snap.ObjectPrefabPreset',
    *             interfaces: Preset.descriptor().interfaces,
    *             dependencies: [Editor.Model.IModel],
    *             name: 'Object Prefab',
    *             description: '',
    *             icon: Editor.Icon.fromFile(import.meta.resolve('../Resources/ObjectPrefab.svg')),
    *             section: 'General',
    *             entityType: 'ObjectPrefab'
    *         };
    *     }
    *     constructor(pluginSystem) {
    *         super(pluginSystem);
    *     }
    *     create(destination) {
    *         const model = this.pluginSystem.findInterface(Editor.Model.IModel);
    *         const assetManager = model.project.assetManager;
    
    *         const prefab = assetManager.createNativeAsset('ObjectPrefab', 'ObjectPrefab', destination);
    
    *         const object = prefab.addSceneObject(null);
    *         object.name = 'Object Prefab';
    
    *         return prefab;
    *     }
    * }
    * ```
    
    * ```js
    * // Triggering another plugin from a plugin
    * import { MyOtherPluginPreset } from './MyOtherPluginPreset.js';
    * const myOtherPluginPreset = new MyOtherPluginPreset(this.pluginSystem);
    * myOtherPluginResult = await myOtherPluginPreset.createAsync();
    * ```
    
    */
    class PluginSystem extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Instantiates a plugin from the given descriptor and returns it as an IPlugin.
        */
        create(descriptor: IPluginDescriptor): Editor.IPlugin
        
        /**
        * Get various interfaces to the Lens Studio editor, such as its {@link Editor.Model} and {@link Editor.Model.AssetManager}. 
        */
        findInterface(id: any): Editor.IInterface
        
        /**
        * Loads all plugins found in the specified directory path.
        */
        loadDirectory(directory: Editor.Path): void
        
        /**
        * Unloads all plugins previously loaded from the specified directory path.
        */
        unloadDirectory(directory: Editor.Path): void
        
        /**
        * Read-only list of all currently registered plugin descriptors.
        
        * @readonly
        */
        descriptors: IPluginDescriptor[]
        
    }

}

declare namespace Editor {
    /**
    * Represents a 2D point with x and y coordinates.
    */
    class Point {
        /**
        * Constructs a new Point instance with default x and y values of zero.
        */
        constructor()
        
        /**
        * Horizontal coordinate of the point.
        */
        x: number
        
        /**
        * Vertical coordinate of the point.
        */
        y: number
        
    }

}

declare namespace Editor {
    /**
    * Represents a 2D rectangle with position and dimensions.
    */
    class Rect {
        /**
        * Constructs a new Rect with default zero values.
        */
        constructor()
        
        /**
        * Returns the center point of the rectangle as a vec2.
        */
        getCenter(): vec2
        
        /**
        * Returns the width and height of the rectangle as a vec2.
        */
        getSize(): vec2
        
        /**
        * Moves the rectangle so its center is at the given vec2 position.
        */
        setCenter(center: vec2): void
        
        /**
        * Sets the width and height of the rectangle from a vec2.
        */
        setSize(size: vec2): void
        
        /**
        * Converts the rectangle to a vec4 (left, bottom, right, top).
        */
        toVec4(): vec4
        
        /**
        * Y coordinate of the bottom edge.
        */
        bottom: number
        
        /**
        * X coordinate of the left edge.
        */
        left: number
        
        /**
        * Corner point at the left and bottom edges as a vec2.
        */
        leftBottom: vec2
        
        /**
        * X coordinate of the right edge.
        */
        right: number
        
        /**
        * Corner point at the right and top edges as a vec2.
        */
        rightTop: vec2
        
        /**
        * Y coordinate of the top edge.
        */
        top: number
        
        /**
        * Creates a new Rect instance.
        */
        static create(left: number, right: number, bottom: number, top: number): Editor.Rect
        
        /**
        * Creates a Rect from minimum and maximum corner points.
        */
        static fromMinMax(min: vec2, max: vec2): Editor.Rect
        
    }

}

declare namespace Editor {
    /**
    * Stores event listener connections, automatically cleaned up on scope exit.
    */
    class ScopedConnection extends Editor.IGuard {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Disconnects the associated signal connection and returns true if it was active.
        */
        disconnect(): boolean
        
        /**
        * Indicates whether the connection is currently active.
        
        * @readonly
        */
        isConnected: boolean
        
    }

}

declare namespace Editor {
    /**
    * Represents a 2D or 3D shape object.
    */
    class Shape {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Creates a box-shaped physics collision component and adds it to the given scene.
        */
        static createBoxShape(scene: Editor.Assets.Scene): Editor.Components.Physics.Box
        
        /**
        * Creates a capsule-shaped physics collision component and adds it to the given scene.
        */
        static createCapsuleShape(scene: Editor.Assets.Scene): Editor.Components.Physics.Capsule
        
        /**
        * Creates a cone-shaped physics collision component and adds it to the given scene.
        */
        static createConeShape(scene: Editor.Assets.Scene): Editor.Components.Physics.Cone
        
        /**
        * Creates a cylinder-shaped physics collision component and adds it to the given scene.
        */
        static createCylinderShape(scene: Editor.Assets.Scene): Editor.Components.Physics.Cylinder
        
        /**
        * Creates a level set physics collision component and adds it to the given scene.
        */
        static createLevelSetShape(scene: Editor.Assets.Scene): Editor.Components.Physics.LevelSet
        
        /**
        * Creates a mesh-based physics collision component and adds it to the given scene.
        */
        static createMeshShape(scene: Editor.Assets.Scene): Editor.Components.Physics.Mesh
        
        /**
        * Creates a sphere-shaped physics collision component and adds it to the given scene.
        */
        static createSphereShape(scene: Editor.Assets.Scene): Editor.Components.Physics.Sphere
        
    }

}

declare namespace Editor {
    /**
    * Used with {@link Editor.Assets.RenderTarget}.
    */
    class Size {
        /**
        * Constructs a Size with the given width and height values.
        */
        constructor(x: number, y: number)
        
        /**
        * Checks whether this size equals the given size.
        */
        equal(value: Editor.Size): boolean
        
        /**
        * Returns true if both x and y are zero.
        */
        isEmpty(): boolean
        
        /**
        * Converts this size to a vec2.
        */
        toVec2(): vec2
        
        /**
        * Horizontal component of the size.
        */
        x: number
        
        /**
        * Vertical component of the size.
        */
        y: number
        
        /**
        * Creates a Size from a vec2 value.
        */
        static fromVec2(value: vec2): Editor.Size
        
    }

}

declare namespace Editor {
    /**
    * Represents position, rotation, and scale in 3D space.
    */
    class Transform {
        /**
        * Constructs a Transform with the given position, rotation, and scale vectors.
        */
        constructor(position: vec3, rotation: vec3, scale: vec3)
        
        /**
        * World-space position of the transform as a vec3.
        */
        position: vec3
        
        /**
        * Euler rotation of the transform as a vec3.
        */
        rotation: vec3
        
        /**
        * Scale of the transform as a vec3.
        */
        scale: vec3
        
    }

}

declare namespace Editor {
    /**
    * Version information for the editor or plugin.
    */
    class Version {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Major version number.
        
        * @readonly
        */
        major: number
        
        /**
        * Minor version number.
        
        * @readonly
        */
        minor: number
        
        /**
        * Patch version number.
        
        * @readonly
        */
        patch: number
        
    }

}

declare class IPanelPlugin extends Editor.IPlugin {
    
    /** @hidden */
    protected constructor()
    
    /**
    * Read-only string displayed as the panel's title.
    
    * @readonly
    */
    title: string
    
    /**
    * Read-only UI widget rendered inside the panel.
    
    * @readonly
    */
    widget: import('LensStudio:Ui').Widget
    
}

declare class IPluginDescriptor extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
    * List of interface IDs that this plugin depends on.
    
    * @readonly
    */
    dependencies: Editor.InterfaceId[]
    
    /**
    * Human-readable description of the plugin.
    
    * @readonly
    */
    description: string
    
    /**
    * Unique identifier string for the plugin.
    
    * @readonly
    */
    id: string
    
    /**
    * List of interface IDs that this plugin implements or exposes.
    
    * @readonly
    */
    interfaces: Editor.InterfaceId[]
    
    /**
    * Display name of the plugin.
    
    * @readonly
    */
    name: string
    
}

/**
* Provides analytics functionality for logging events from within a Lens.

* @module LensStudio:Analytics
*/
declare module "LensStudio:Analytics" {
}

/**
* Before using anything in this namespace, make sure to import `LensStudio:App`.

* @module LensStudio:App

* @example
* ```js
* import * as app from "LensStudio:App"
* const version = app.version;
* ```
*/
declare module "LensStudio:App" {
    /**
    * A map containing the PATH and PWD environment variables of the current Lens Studio process.
    */
    let env: any
    
    /**
    * The Lens Studio version.
    */
    let version: string
    
}

/**
* Module providing asset instantiation capabilities for Lens Studio plugins.

* @module LensStudio:AssetInstantiator
*/
declare module "LensStudio:AssetInstantiator" {
}

declare module "LensStudio:AssetInstantiator" {
    /**
    * Plugin class that manages asset instantiation, initialized with a PluginSystem and optional Descriptor.
    */
    class AssetInstantiator extends Editor.IPlugin {
        /**
        * Constructs an AssetInstantiator plugin instance with the given plugin system and optional descriptor.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Instantiates an asset into a scene under the given target scene object, returning the created prefabable objects.
        */
        instantiate(asset: Editor.Assets.Asset, scene: Editor.Assets.ObjectOwner, target: Editor.Model.SceneObject): Editor.Model.Prefabable[]
        
        /**
        * Resolves and prepares all asset dependencies required before instantiation, returning them as a promise.
        */
        prepareDependencies(asset: Editor.Assets.Asset, manager: Editor.Model.AssetManager): Promise<Editor.Assets.Asset[]>
        
        /**
        * The plugin system instance this instantiator is registered with.
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

declare module "LensStudio:AssetInstantiator" {
    /**
    * Configuration descriptor for the AssetInstantiator plugin, extending BaseDescriptor.
    */
    class Descriptor extends BaseDescriptor {
        /**
        * Constructs a new Descriptor instance for configuring the AssetInstantiator plugin.
        */
        constructor()
        
        /**
        * Function that takes an asset and returns whether it can be instantiated by this descriptor.
        */
        canInstantiate: (arg1: Editor.Assets.Asset) => any
        
    }

}

/**
* Before using anything in this namespace, make sure to import `LensStudio:AssetLibrary`.

* @module LensStudio:AssetLibrary
*/
declare module "LensStudio:AssetLibrary" {
}

declare module "LensStudio:AssetLibrary" {
    /**
    * A handle for an asset from the Asset Library.
    */
    class Asset {
        
        /** @hidden */
        protected constructor()
        
        /**
        * The id of the asset.
        
        * @readonly
        */
        assetId: string
        
        /**
        * The name of the asset.
        
        * @readonly
        */
        assetName: string
        
        /**
        * The type of the asset.
        
        * @readonly
        */
        assetType: AssetType
        
        /**
        * Complexity rating of the asset.
        
        * @readonly
        */
        complexity: number
        
        /**
        * Name or identifier of the asset's creator.
        
        * @readonly
        */
        creator?: Creator
        
        /**
        * Short description of the asset.
        
        * @readonly
        */
        description: string
        
        /**
        * URL pointing to the asset's documentation page.
        
        * @readonly
        */
        documentationUrl: string
        
        /**
        * Full-length description of the asset.
        
        * @readonly
        */
        fullDescription: string
        
        /**
        * Maximum Lens Studio version compatible with this asset.
        
        * @readonly
        */
        maxLsVersion: Editor.Version
        
        /**
        * List of platforms the asset supports.
        
        * @readonly
        */
        platforms: Platform[]
        
        /**
        * Preview images or media associated with the asset.
        
        * @readonly
        */
        previews: Resource[]
        
        /**
        * A handle for the resources contained in the asset that can be downloaded.
        
        * @readonly
        */
        resources: Resource[]
        
        /**
        * Subcategory tags assigned to the asset.
        
        * @readonly
        */
        subcategories: Subcategory[]
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * A filter used to narrow down an AssetListRequest.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class AssetFilter {
        /**
        * Constructs a new AssetFilter for narrowing down an AssetListRequest.
        */
        constructor()
        
        /**
        * Array of category ID strings used to filter assets by category.
        */
        categoryIds: string[]
        
        /**
        * Pagination settings controlling page size and offset for asset query results.
        */
        pagination: Pagination
        
        /**
        * Text string used to filter assets by name or keyword.
        */
        searchText: string
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * A request object for finding assets in the Asset Library.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class AssetListRequest {
        /**
        * Creates a new AssetListRequest for querying the Asset Library.
        */
        constructor(environmentSetting: EnvironmentSetting, assetFilter: AssetFilter)
        
        /**
        * Filter criteria used to narrow down the list of assets to retrieve.
        
        * @readonly
        */
        assetFilter: AssetFilter
        
        /**
        * Environment setting that determines which asset environment context to query.
        
        * @readonly
        */
        environmentSetting: EnvironmentSetting
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * A handle returned by the  {@link "LensStudio:AssetLibrary".AssetListService}.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class AssetListResponse {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Indicates whether the asset list request was cancelled before completion.
        
        * @readonly
        */
        cancelled: boolean
        
        /**
        * The successful result payload of the asset list request, present when the request succeeded.
        
        * @readonly
        */
        data?: AssetListSuccess
        
        /**
        * The error details from the asset list request, present when the request failed.
        
        * @readonly
        */
        error?: ServiceError
        
        /**
        * Indicates whether the asset list request completed successfully without errors.
        
        * @readonly
        */
        ok: boolean
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * A handle to the  {@link "LensStudio:AssetLibrary".AssetListService} which can provide a list of assets based on the passed in parameters.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class AssetListService extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Fetches a list of assets from the Asset Library matching the given request, returning a promise that resolves to an AssetListResponse.
        */
        fetchAsync(request: AssetListRequest): Promise<AssetListResponse>
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * The result of a `fetch` call by the {@link "LensStudio:AssetLibrary".AssetListService}, which provides you a list of matching assets in the Asset Library.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class AssetListSuccess {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Array of assets returned from a successful asset list request.
        
        * @readonly
        */
        assets: Asset[]
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * The types of assets that might be provided by the {@link "LensStudio:AssetLibrary"}.
    */
    enum AssetType {
        /**
        * Represents an unrecognized or unset asset type.
        */
        Invalid,
        /**
        * Represents a static texture asset.
        */
        Texture,
        /**
        * Represents an animated texture asset.
        */
        AnimatedTexture,
        /**
        * Represents a material asset.
        */
        Material,
        /**
        * Represents a 3D mesh asset.
        */
        Mesh3D,
        /**
        * Represents a script asset.
        */
        Script,
        /**
        * Represents a predefined scene object preset.
        */
        ObjectPreset,
        /**
        * Represents a reusable scene object prefab.
        */
        ObjectPrefab,
        /**
        * Represents an audio asset.
        */
        Audio,
        /**
        * Represents a machine learning model asset.
        */
        MLModel,
        /**
        * Represents a project template asset.
        */
        ProjectTemplate,
        /**
        * Represents a music asset.
        */
        Music,
        /**
        * Represents a remote API asset.
        */
        RemoteApi,
        /**
        * Represents a custom component asset.
        */
        CustomComponent,
        /**
        * Represents a video asset.
        */
        Video,
        /**
        * Represents a guide or tutorial asset.
        */
        Guide,
        /**
        * Represents a plugin asset.
        */
        Plugin,
        /**
        * Represents a packaged bundle of assets.
        */
        AssetPackage,
        /**
        * Default asset type used when no specific type is specified.
        */
        Default
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Information about the creator or author of an Asset Library asset.
    */
    class Creator {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Display name of the creator.
        
        * @readonly
        */
        displayName: string
        
        /**
        * Whether the creator is an official Lens creator.
        
        * @readonly
        */
        officialLensCreator: boolean
        
        /**
        * URL to the creator's profile page.
        
        * @readonly
        */
        profileUrl: string
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * The Asset Library environment which assets should be searched within. In most cases `Production` should be used. Used with {@link "LensStudio:AssetLibrary".EnvironmentSetting}.   @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    enum Environment {
        /**
        * Represents an invalid or unset environment state.
        */
        Invalid,
        /**
        * Targets the live production Asset Library environment.
        */
        Production,
        /**
        * Targets the staging Asset Library environment for pre-release testing.
        */
        Staging
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * A configuration object that describes what Asset Library environment should be accessed.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class EnvironmentSetting {
        /**
        * Constructs a new EnvironmentSetting instance for configuring the Asset Library environment.
        */
        constructor()
        
        /**
        * The target environment for the asset library request.
        */
        environment: Environment
        
        /**
        * The space context associated with the environment setting.
        */
        space: Space
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Request object for fetching specific assets by their unique identifiers.
    */
    class GetAssetsByIdsRequest {
        /**
        * Constructs a new GetAssetsByIdsRequest for fetching assets by their IDs from the Asset Library.
        */
        constructor(environmentSetting: EnvironmentSetting, assetIds: string[])
        
        /**
        * Array of asset ID strings to retrieve.
        
        * @readonly
        */
        assetIds: string[]
        
        /**
        * Environment setting that determines which backend environment to query.
        
        * @readonly
        */
        environmentSetting: EnvironmentSetting
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Response returned when fetching assets by IDs, containing matched assets or an error.
    */
    class GetAssetsByIdsResponse {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Indicates whether the request was cancelled before completing.
        
        * @readonly
        */
        cancelled: boolean
        
        /**
        * Asset data returned by the request, if successful.
        
        * @readonly
        */
        data?: any
        
        /**
        * Service error details if the request failed.
        
        * @readonly
        */
        error?: ServiceError
        
        /**
        * True if the request completed successfully without errors.
        
        * @readonly
        */
        ok: boolean
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Service interface for submitting get-assets-by-IDs requests.
    */
    class GetAssetsByIdsService extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Fetches assets matching the given IDs request and returns a promise resolving to the response.
        */
        fetchAsync(request: GetAssetsByIdsRequest): Promise<GetAssetsByIdsResponse>
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * A handle that provides access to the AssetLibraryListService.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class IAssetLibraryProvider extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Service for listing assets from the asset library.
        
        * @readonly
        */
        assetService: AssetListService
        
        /**
        * Service for fetching assets by their IDs.
        
        * @readonly
        */
        assetsByIdsService: GetAssetsByIdsService
        
        /**
        * Service for listing music assets from the asset library.
        
        * @readonly
        */
        musicService: MusicListService
        
        /**
        * Unique identifier for the IAssetLibraryProvider plugin component interface.
        */
        static interfaceId: Editor.InterfaceId
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Provides access to licensed music import functionality for adding music assets to a project.
    */
    class LicensedMusic {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Imports a licensed music asset into the specified project, returning true on success.
        */
        static importMusic(musicAsset: MusicAsset, project: Editor.Model.Project): boolean
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Handle for a music asset from the Asset Library.
    */
    class MusicAsset {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Name of the artist who created the music track.
        
        * @readonly
        */
        artistName: string
        
        /**
        * Unique identifier for this asset in the Asset Library.
        
        * @readonly
        */
        assetId: string
        
        /**
        * Display name of the music asset.
        
        * @readonly
        */
        assetName: string
        
        /**
        * Type category of the asset, as an AssetType enum value.
        
        * @readonly
        */
        assetType: AssetType
        
        /**
        * Complexity rating or level associated with this asset.
        
        * @readonly
        */
        complexity: number
        
        /**
        * Creator or rights holder of the asset.
        
        * @readonly
        */
        creator?: Creator
        
        /**
        * Short description of the music asset.
        
        * @readonly
        */
        description: string
        
        /**
        * URL pointing to documentation or more information about this asset.
        
        * @readonly
        */
        documentationUrl: string
        
        /**
        * Extended description of the music asset with additional detail.
        
        * @readonly
        */
        fullDescription: string
        
        /**
        * Indicates whether the track contains explicit content.
        
        * @readonly
        */
        isExplicit: boolean
        
        /**
        * Maximum Lens Studio version this asset is compatible with.
        
        * @readonly
        */
        maxLsVersion: Editor.Version
        
        /**
        * List of platforms on which this asset is available.
        
        * @readonly
        */
        platforms: Platform[]
        
        /**
        * Preview resources available for this music asset.
        
        * @readonly
        */
        previews: Resource[]
        
        /**
        * Downloadable or importable resources associated with this asset.
        
        * @readonly
        */
        resources: Resource[]
        
        /**
        * Subcategory tags used to classify this asset within the library.
        
        * @readonly
        */
        subcategories: Subcategory[]
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Response returned from a music list query, containing either a success result or a service error.
    */
    class MusicListResponse {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Indicates whether the request was cancelled before completion.
        
        * @readonly
        */
        cancelled: boolean
        
        /**
        * Holds the successful result of the music list request, if available.
        
        * @readonly
        */
        data?: MusicListSuccess
        
        /**
        * Contains the service error if the request failed.
        
        * @readonly
        */
        error?: ServiceError
        
        /**
        * Indicates whether the request completed successfully without errors.
        
        * @readonly
        */
        ok: boolean
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Service interface for submitting and managing music list requests.
    */
    class MusicListService extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Fetches a list of music assets matching the given request and returns a promise resolving to a MusicListResponse.
        */
        fetchAsync(request: AssetListRequest): Promise<MusicListResponse>
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Successful result of a music list request, containing the returned music assets.
    */
    class MusicListSuccess {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Array of music assets returned from a successful music list request.
        
        * @readonly
        */
        musicAssets: MusicAsset[]
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Configuration for the page to be accessed in a {@link "LensStudio:AssetLibrary".AssetFilter}.
    */
    class Pagination {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Maximum number of items to return in a single page.
        
        * @readonly
        */
        limit: number
        
        /**
        * Starting index for the current page of results.
        
        * @readonly
        */
        offset: number
        
        /**
        * Creates a Pagination instance with the given offset and limit for a single batch request.
        */
        static singleBatch(offset: number, limit: number): Pagination
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Enum representing the target platform associated with an asset.
    */
    enum Platform {
        /**
        * No specific platform target.
        */
        None,
        /**
        * Targets the Snapchat platform.
        */
        Snapchat,
        /**
        * Targets the Spectacles platform.
        */
        Spectacles,
        /**
        * Targets the Camera Kit platform.
        */
        CameraKit
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * The actual resources of an {@link "LensStudio:AssetLibrary".Asset}.
    */
    class Resource {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Text description of the asset library resource.
        
        * @readonly
        */
        description: string
        
        /**
        * Display name of the asset library resource.
        
        * @readonly
        */
        name: string
        
        /**
        * URI identifying the location of the asset library resource.
        
        * @readonly
        */
        uri: string
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * The callback of an errored `fetch` call by the {@link "LensStudio:AssetLibrary".AssetListService}.  @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    class ServiceError {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Human-readable message describing the service error.
        
        * @readonly
        */
        description: string
        
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * The Asset Library space which assets should be searched within. In most cases `Public` should be used. Used with {@link "LensStudio:AssetLibrary".EnvironmentSetting}.   @see {@link "LensStudio:AssetLibrary".Asset}.
    */
    enum Space {
        /**
        * Represents an invalid or unset space value.
        */
        Invalid,
        /**
        * Denotes an asset space restricted to internal use.
        */
        Internal,
        /**
        * Denotes an asset space accessible publicly.
        */
        Public
    }

}

declare module "LensStudio:AssetLibrary" {
    /**
    * Tag or classification used to further categorize an asset within its primary asset type.
    */
    class Subcategory {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Asset Library subcategory. Mostly used for Templates, and handling new/updaetd tags.
        
        * @readonly
        */
        description: string
        
        /**
        * @readonly
        */
        iconUrl: string
        
        /**
        * @readonly
        */
        id: string
        
        /**
        * @readonly
        */
        name: string
        
    }

}

/**
* Plugin module providing a chat assistant interface within Lens Studio.

* @module LensStudio:ChatAssistant
*/
declare module "LensStudio:ChatAssistant" {
}

/**
* Module providing base classes and interfaces for building AI-invokable ChatTool plugins in Lens Studio.

* @module LensStudio:ChatTool
*/
declare module "LensStudio:ChatTool" {
}

declare module "LensStudio:ChatTool" {
    /**
    * Base class for AI-invokable operations; extend this to implement a tool that the AI can call via execute().
    */
    class ChatTool extends Editor.IPlugin {
        /**
        * Constructs a ChatTool plugin instance with the given plugin system and optional descriptor.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Executes the tool with the given parameters and returns a Result containing output data or an error string.
        */
        execute(parameters: Parameters): Promise<Result>
        
        /**
        * The PluginSystem instance used to access shared Editor interfaces via findInterface().
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

declare module "LensStudio:ChatTool" {
    /**
    * Defines a ChatTool's identity and metadata, including id, name, description, and dependencies.
    */
    class Descriptor extends BaseDescriptor {
        /**
        * Constructs a new ChatTool Descriptor with default values for id, name, description, and dependencies.
        */
        constructor()
        
        /**
        * JSON schema object defining the parameters accepted by the chat tool's execute() method.
        */
        schema: any
        
    }

}

declare module "LensStudio:ChatTool" {
    /**
    * Interface for registering and discovering ChatTool instances within the plugin system.
    */
    class IChatToolRegistry extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Execute a registered chat tool by its plugin descriptor with the given parameters.
        */
        execute(descriptor: IPluginDescriptor, parameters: Parameters): Promise<Result>
        
        /**
        * Signal emitted when a chat tool plugin is unregistered from the registry.
        
        * @readonly
        */
        toolDeregistered: signal1<IPluginDescriptor, void>
        
        /**
        * Signal emitted when a new chat tool plugin is registered.
        
        * @readonly
        */
        toolRegistered: signal1<IPluginDescriptor, void>
        
        /**
        * Array of all currently registered chat tool plugin descriptors.
        
        * @readonly
        */
        tools: IPluginDescriptor[]
        
        /**
        * Unique identifier used to look up this interface via the plugin system.
        */
        static interfaceId: Editor.InterfaceId
        
    }

}

declare module "LensStudio:ChatTool" {
    /**
    * Holds the input parameters passed to a ChatTool's execute() call.
    */
    class Parameters {
        /**
        * Constructs a new Parameters instance for configuring a ChatTool plugin descriptor.
        */
        constructor()
        
        /**
        * Arbitrary payload containing the tool's input parameters, structured per the tool's schema.
        */
        data: any
        
    }

}

declare module "LensStudio:ChatTool" {
    /**
    * Holds the outcome of a ChatTool execution, with data on success or an error string on failure.
    */
    class Result {
        /**
        * Constructs a new Result object for returning operation outcomes from a ChatTool execute() method.
        */
        constructor()
        
        /**
        * Holds the successful output payload returned by the tool operation.
        */
        data: any
        
        /**
        * Error message string set when the tool operation fails; empty on success.
        */
        error: string
        
    }

}

/**
* Module providing clipboard read/write access for Lens Studio Editor.

* @module LensStudio:Clipboard
*/
declare module "LensStudio:Clipboard" {
    /**
    * Global clipboard instance for the current Editor session.
    */
    let clipboard: import('LensStudio:Clipboard').Clipboard
    
}

declare module "LensStudio:Clipboard" {
    /**
    * Represents the system clipboard, exposing methods to get and set clipboard content.
    */
    class Clipboard {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Current text content of the clipboard.
        */
        text: string
        
    }

}

/**
* Base class and module for creating background plugin services in Lens Studio.

* @module LensStudio:CoreService
*/
declare module "LensStudio:CoreService" {
}

declare module "LensStudio:CoreService" {
    /**
    * Base class for background plugin services; extend to create a service with start/stop lifecycle and access to the plugin system.
    */
    class CoreService extends Editor.IPlugin {
        /**
        * Constructs a new CoreService instance, serving as the base class for background plugin services that integrate with the Lens Studio plugin system.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Initialize the service, set up event connections, and begin background operations.
        */
        start(): void
        
        /**
        * Tear down event connections and stop all background operations.
        */
        stop(): void
        
        /**
        * The plugin system instance used to find and access registered interfaces.
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

declare module "LensStudio:CoreService" {
    /**
    * Defines a service's identity, name, description, and dependencies for registration with the plugin system.
    */
    class Descriptor extends BaseDescriptor {
        /**
        * Constructs a new service descriptor for registering a CoreService plugin with the plugin system.
        */
        constructor()
        
    }

}

/**
* @module LensStudio:Crypto
*/
declare module "LensStudio:Crypto" {
    export function getRandomValues(typedArray: Uint8Array): Uint8Array
    
    export function randomUUID(): string
    
}

declare module "LensStudio:Crypto" {
    class subtle {
        
        /** @hidden */
        protected constructor()
        
        static digest(algorithm: string, data: Uint8Array): Promise<Uint8Array>
        
    }

}

/**
* Module providing base classes for building dialog-style plugins in Lens Studio.

* @module LensStudio:DialogPlugin
*/
declare module "LensStudio:DialogPlugin" {
}

declare module "LensStudio:DialogPlugin" {
    /**
    * Configuration descriptor for a DialogPlugin, including menu placement and optional toolbar settings.
    */
    class Descriptor extends BaseDescriptor {
        /**
        * Creates a new DialogPlugin Descriptor instance for configuring dialog plugin metadata.
        */
        constructor()
        
        /**
        * Menu path hierarchy defining where the dialog's action appears in the editor menu.
        */
        menuActionHierarchy: string[]
        
        /**
        * Configuration object specifying how the dialog's action is represented in the editor toolbar.
        */
        toolbarConfig?: import('LensStudio:Ui').ToolbarConfig
        
    }

}

declare module "LensStudio:DialogPlugin" {
    /**
    * Base class for dialog plugins; extend to implement custom dialogs with a createWidget method.
    */
    class DialogPlugin extends Editor.IPlugin {
        /**
        * Constructs a new DialogPlugin instance with the given plugin system and optional descriptor.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Tears down the plugin and releases its resources.
        */
        deinit(): void
        
        /**
        * Creates and displays the dialog as a child of the given parent widget, returning the resulting Dialog instance.
        */
        show(parent: import('LensStudio:Ui').Widget): import('LensStudio:Ui').Dialog
        
        /**
        * The PluginSystem instance that owns and manages this plugin.
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* Module providing base classes for building editor plugins that integrate custom editing behavior into Lens Studio.

* @module LensStudio:EditorPlugin
*/
declare module "LensStudio:EditorPlugin" {
}

declare module "LensStudio:EditorPlugin" {
    import {EditorDescriptor} from "LensStudio:PanelPlugin" 
    
    /**
    * Descriptor for an editor plugin, extending EditorDescriptor with a canEdit predicate to determine which entities the plugin handles.
    */
    class Descriptor extends EditorDescriptor {
        /**
        * Constructs a new Descriptor instance for registering an editor plugin.
        */
        constructor()
        
        /**
        * Function that determines whether the plugin can edit a given asset.
        */
        canEdit: (arg1: Editor.Model.Entity) => any
        
    }

}

declare module "LensStudio:EditorPlugin" {
    /**
    * Base class for editor plugins, constructed with a PluginSystem and optional Descriptor to integrate custom editing logic.
    */
    class EditorPlugin extends Editor.IPlugin {
        /**
        * Constructs an EditorPlugin instance, optionally bound to a plugin system and descriptor.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Creates and returns a widget parented to the given parent widget.
        */
        createWidget(parent: import('LensStudio:Ui').Widget): import('LensStudio:Ui').Widget
        
        /**
        * Cleans up and deinitializes the plugin.
        */
        deinit(): void
        
        /**
        * Handles editing of the given entities, returning true if the plugin handled them.
        */
        edit(entities: Editor.Model.Entity[]): boolean
        
        /**
        * The plugin system instance this plugin belongs to.
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* Module for generating entities within Lens Studio projects.

* @module LensStudio:EntityGenerator
*/
declare module "LensStudio:EntityGenerator" {
}

declare module "LensStudio:EntityGenerator" {
    /**
    * Configuration descriptor for an entity generator, specifying entity type and icon.
    */
    class Descriptor extends BaseDescriptor {
        /**
        * Creates a new Descriptor instance for configuring an entity generator plugin.
        */
        constructor()
        
        /**
        * Numeric order controlling where this generator appears in the UI relative to others.
        */
        displayOrder: number
        
        /**
        * Target entity category this generator creates  'SceneObject', 'Asset', or 'Component'.
        */
        entityType: string
        
        /**
        * Icon displayed for this generator in the Lens Studio UI.
        */
        icon: Editor.Icon
        
    }

}

declare module "LensStudio:EntityGenerator" {
    /**
    * Constructs a new entity generator plugin with an optional descriptor.
    */
    class EntityGenerator extends Editor.IPlugin {
        /**
        * Constructs an EntityGenerator plugin instance with the given plugin system and optional descriptor.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Generates a new Entity and returns it as a Promise.
        */
        generate(): Promise<Editor.Model.Entity>
        
        /**
        * The PluginSystem instance associated with this plugin.
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* Before using anything in this namespace, make sure to import `LensStudio:FileSystem` and add `filesystem` in your plugin's `module.json`.

* @module LensStudio:FileSystem

* @example
* ```js
* // module.json
* {
*     "main": "main.js",
*     "permissions": ["filesystem"]
* }
* ```

* ```js
* // main.js
* import * as fs from 'LensStudio:FileSystem';
* let s = fs.readFile(new Editor.Path(import.meta.resolve('ellipsis.txt')));
* ```
*/
declare module "LensStudio:FileSystem" {
    /**
    * `Options` can take recursive and force. The recursive parameter controls whether to read into subdirectories. The force parameter controls whether duplicated contents will be overwritten during the copying process. 
    
    * ```js
    * fs.copyDir(Tests.srcDir, Tests.destDir, {force: true, recursive: true});
    * fs.copyDir(Tests.srcDir, Tests.destDir, null);
    * fs.copyDir(Tests.srcDir, Tests.destDir, {});
    * fs.copyDir(Tests.srcDir, Tests.destDir, {force: false});
    * ```
    */
    export function copyDir(src: Editor.Path, dest: Editor.Path, options: CopyDirOptions): void
    
    /**
    * Copies a file from `src` to `dest`.
    */
    export function copyFile(src: Editor.Path, dest: Editor.Path): void
    
    /**
    * Create a directory at `path`.
    */
    export function createDir(path: Editor.Path, options: CreateDirOptions): void
    
    /**
    * Checks if a file or directory exists at `path`.
    */
    export function exists(path: Editor.Path): boolean
    
    /**
    * Checks whether a `path` is a directory.
    */
    export function isDirectory(path: Editor.Path): boolean
    
    /**
    * Checks whether a `path` is a file.
    */
    export function isFile(path: Editor.Path): boolean
    
    /**
    * Returns the content of `path` as bytes.
    */
    export function readBytes(path: Editor.Path): Uint8Array
    
    /**
    * Returns an array of paths relative to the specified one.
    
    * `Options` can take a single parameter named `recursive` (`false` by default):
    
    *  ```js
    * fs.readDir(Tests.destDir, {recursive: false});
    * ```
    
    */
    export function readDir(path: Editor.Path, options: ReadDirOptions): Editor.Path[]
    
    /**
    * Returns the content of `path`.
    */
    export function readFile(path: Editor.Path): string
    
    /**
    * Resolves a path to its canonical absolute form, following symlinks.
    */
    export function realPath(path: Editor.Path): Editor.Path
    
    /**
    * Removes the `path`.
    */
    export function remove(path: Editor.Path): void
    
    /**
    * Renames the `path`.
    */
    export function rename(oldPath: Editor.Path, newPath: Editor.Path): void
    
    /**
    * Get the size of `path`.
    */
    export function size(path: Editor.Path): number
    
    /**
    * Writes a file to `path` given the `data`.
    */
    export function writeFile(path: Editor.Path, data: (Uint8Array|string)): void
    
}

declare module "LensStudio:FileSystem" {
    /**
    * Used with {@link "LensStudio:FileSystem".CopyDirOptions}. 
    */
    class CopyDirOptions {
        
        /** @hidden */
        protected constructor()
        
        /**
        * When true, overwrites existing files at the destination.
        */
        force: boolean
        
        /**
        * When true, copies nested subdirectories and their contents.
        */
        recursive: boolean
        
    }

}

declare module "LensStudio:FileSystem" {
    /**
    * Used with {@link "LensStudio:FileSystem".CreateDirOptions}.
    */
    class CreateDirOptions {
        
        /** @hidden */
        protected constructor()
        
        /**
        * When true, creates all intermediate directories in the path if they do not exist.
        */
        recursive: boolean
        
    }

}

declare module "LensStudio:FileSystem" {
    /**
    * Used with {@link "LensStudio:FileSystem".ReadDirOptions}.
    */
    class ReadDirOptions {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Whether to read directory contents recursively, including all subdirectories.
        */
        recursive: boolean
        
    }

}

declare module "LensStudio:FileSystem" {
    /**
    * Helper to create temporary directory.
    
    * @example
    * ```js
    * import * as fs from 'LensStudio:FileSystem';
    
    * const resourceName = "resourceName.txt";
    
    * // Create a temporary dir
    * const tempDir = fs.TempDir.create();
    
    * // Create a path that we want to write file to
    * const resourcePath = tempDir.path;
    * resoursePath.append(resourceName);
    
    * // Write to the file
    * fs.writeFile(resourceName, "Hello World");
    * ```
    */
    class TempDir extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Filesystem path to the temporary directory.
        
        * @readonly
        */
        path: Editor.Path
        
        /**
        * Creates a temporary directory which will be deleted the moment all references to it disappears.
        */
        static create(): TempDir
        
    }

}

declare module "LensStudio:FileSystem" {
    /**
    * Watches a file or directory for changes and emits events when modifications occur.
    */
    class Watcher extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Begins watching the configured path for filesystem events.
        */
        start(): void
        
        /**
        * Stops watching the configured path for filesystem events.
        */
        stop(): void
        
        /**
        * Indicates whether the watcher is currently active.
        
        * @readonly
        */
        isWatching: boolean
        
        /**
        * Signal emitted when a file is added at the watched path.
        
        * @readonly
        */
        onAdded: signal1<Editor.Path, void>
        
        /**
        * Signal emitted when a file is modified at the watched path.
        
        * @readonly
        */
        onModified: signal1<Editor.Path, void>
        
        /**
        * Signal emitted when a file is moved at the watched path.
        
        * @readonly
        */
        onMoved: signal2<Editor.Path, Editor.Path, void>
        
        /**
        * Signal emitted when a file is removed from the watched path.
        
        * @readonly
        */
        onRemoved: signal1<Editor.Path, void>
        
        /**
        * The filesystem path being monitored by this watcher.
        
        * @readonly
        */
        path: Editor.Path
        
        /**
        * Creates a new Watcher instance for the specified path.
        */
        static create(path: Editor.Path): Watcher
        
    }

}

/**
* Module providing GUI service plugin infrastructure for Lens Studio.

* @module LensStudio:GuiService
*/
declare module "LensStudio:GuiService" {
}

declare module "LensStudio:GuiService" {
    /**
    * Descriptor object for configuring a GuiService plugin instance.
    */
    class Descriptor extends BaseDescriptor {
        /**
        * Constructs a new GuiService Descriptor instance.
        */
        constructor()
        
    }

}

declare module "LensStudio:GuiService" {
    /**
    * Plugin class managing GUI service registration and initialization within the editor plugin system.
    */
    class GuiService extends Editor.IPlugin {
        /**
        * Constructs a GuiService plugin instance with the given plugin system and optional descriptor.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Starts the GUI service and initializes its GUI components.
        */
        start(): void
        
        /**
        * Stops the GUI service and tears down its GUI components.
        */
        stop(): void
        
        /**
        * The plugin system instance this service is registered with.
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* Module providing a live lens preview widget for use inside panel plugins.

* @module LensStudio:LensBasedEditorView
*/
declare module "LensStudio:LensBasedEditorView" {
}

/**
* Module providing log collection and monitoring functionality for Lens Studio plugins.

* @module LensStudio:Logger
*/
declare module "LensStudio:Logger" {
}

declare module "LensStudio:Logger" {
    /**
    * Plugin component interface for collecting and exposing user log data.
    */
    class IUserLogCollector extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Signal fired when a log reveal is requested, providing the associated log string.
        
        * @readonly
        */
        onRevealLogRequest: signal1<string, void>
        
        /**
        * Unique identifier for the IUserLogCollector interface.
        */
        static interfaceId: Editor.InterfaceId
        
    }

}

/**
* @module LensStudio:Mcp
*/
declare module "LensStudio:Mcp" {
}

declare module "LensStudio:Mcp" {
    class IMcpServer extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        getConfig(): any | undefined
        
        getServerToken(): string
        
        getServerUrl(): string
        
        isRunning(): boolean
        
        static interfaceId: Editor.InterfaceId
        
    }

}

/**
* Before using anything in this namespace, make sure to import `LensStudio:ModelUI`.

* @module LensStudio:ModelUi
*/
declare module "LensStudio:ModelUi" {
}

declare module "LensStudio:ModelUi" {
    import {LineEdit} from "LensStudio:Ui" 
    
    /**
    * Line edit widget for picking entity references by type, backed by an asset manager and entity prototype registry.
    */
    class EntityReferencePickerLine extends LineEdit {
        /**
        * Constructs an EntityReferencePickerLine widget for picking entity references of a given type, bound to the specified asset manager and entity prototype registry.
        */
        constructor(assetManager: Editor.Model.AssetManager, entityPrototypeRegistry: Editor.Model.IEntityPrototypeRegistry, entityType: string, parent: import('LensStudio:Ui').Widget)
        
        /** @internal */
        static create(widget: EntityReferencePickerLine): EntityReferencePickerLine
        
        /**
        * Fired when an asset is highlighted in the picker.
        
        * @readonly
        */
        onAssetHighlight: signal0<void>
        
        /**
        * Fired when the user confirms an entity selection.
        
        * @readonly
        */
        onEntityChoose: signal0<void>
        
        /**
        * Fired when the current entity reference is cleared.
        
        * @readonly
        */
        onEntityClear: signal0<void>
        
        /**
        * Fired when an entity is dropped onto the picker, carrying the dropped entity.
        
        * @readonly
        */
        onEntityDrop: signal1<Editor.Model.Entity, void>
        
        /**
        * Fired when an entity is selected in the picker.
        
        * @readonly
        */
        onEntitySelect: signal0<void>
        
    }

}

/**
* Module providing multimedia playback widgets, including media player controls for use in Lens Studio editor UI.

* @module LensStudio:MultimediaWidgets
*/
declare module "LensStudio:MultimediaWidgets" {
}

/**
* Before using anything in this namespace, make sure to import `LensStudio:Network` and add `network` in your plugin's `module.json`. 

* @module LensStudio:Network

* @example
* ```js
* // module.json
* {
*     "main": "main.js",
*     "permissions": ["network"]
* }
* ```

* ```js
* // main.js
* import * as network from 'LensStudio:Network';
* ```
*/
declare module "LensStudio:Network" {
    /**
    * Calls a HTTPS endpoint with authorization to Snapchat. See {@link Editor.IAuthorization}. Requires `snap_auth_token` in `module.json` of your plugin.
    
    * @beta
    */
    export function performAuthorizedHttpRequest(request: HttpRequest, callback: (arg1: HttpResponse) => void): void
    
    /**
    * Calls a HTTP endpoint.
    
    * @beta
    */
    export function performHttpRequest(request: HttpRequest, callback: (arg1: HttpResponse) => void): void
    
    /**
    * Request an HTTP call with reply. You should store the reply object (e.g. in the `this` of the plugin) in order for the network connection to be maintained.
    
    * @beta
    */
    export function performHttpRequestWithReply(request: HttpRequest): HttpReply
    
}

declare module "LensStudio:Network" {
    /**
    * A TCP Server address. Use with {@link "LensStudio:Network".TcpServer}.
    */
    class Address {
        /**
        * Constructs a new TCP server address instance for use with TcpServer.
        */
        constructor()
        
        /**
        * The address of the server. You should never pass in an address that includes a schema part (e.g. "http://", "ws://", etc.).
        */
        address: string
        
        /**
        * The port to connect to.
        */
        port: number
        
    }

}

declare module "LensStudio:Network" {
    /**
    * Base class for network servers, providing common listen and connection management functionality.
    */
    class BaseServer extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Closes the server and stops accepting new connections.
        */
        close(): void
        
        /**
        * Starts listening for incoming connections on the specified address; returns true if successful.
        */
        listen(address: Address): boolean
        
        /**
        * The address string the server is currently bound to.
        
        * @readonly
        */
        address: string
        
        /**
        * Signal fired when a new client socket connects to the server.
        
        * @readonly
        */
        onConnect: signal1<import('LensStudio:Network').BaseSocket, void>
        
        /**
        * Signal fired when a server error occurs, passing an error code.
        
        * @readonly
        */
        onError: signal1<number, void>
        
        /**
        * @readonly
        */
        port: number
        
    }

}

declare module "LensStudio:Network" {
    /**
    * Base class for network sockets, providing common send and event handling functionality.
    */
    class BaseSocket extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Closes the socket connection gracefully.
        */
        close(): void
        
        /**
        * Destroys the socket and releases all associated resources immediately.
        */
        destroy(): void
        
        /**
        * The local address bound to this socket.
        
        * @readonly
        */
        localAddress: Address
        
        /**
        * Signal fired when the socket successfully establishes a connection.
        
        * @readonly
        */
        onConnect: signal0<void>
        
        /**
        * Signal fired when data is received on the socket, carrying the received buffer.
        
        * @readonly
        */
        onData: signal1<Editor.Buffer, void>
        
        /**
        * Signal fired when the remote end signals the end of transmission.
        
        * @readonly
        */
        onEnd: signal0<void>
        
        /**
        * Signal fired when a socket error occurs.
        
        * @readonly
        */
        onError: signal1<number, void>
        
        /**
        * The remote address this socket is connected to.
        
        * @readonly
        */
        remoteAddress: Address
        
    }

}

declare module "LensStudio:Network" {
    /**
    * Holds key-value pairs and file attachments for encoding multipart HTTP request bodies.
    
    * @beta
    */
    class FormData {
        /**
        * Constructs a new FormData instance for building multipart HTTP request bodies.
        
        * @beta
        */
        constructor()
        
        /**
        * Appends a body part with optional headers to the form data.
        
        * @beta
        */
        append(body: (Uint8Array|string), headers: any): void
        
    }

}

declare module "LensStudio:Network" {
    /**
    * Handle to an in-progress HTTP request returned by performHttpRequestWithReply; must be retained to keep the connection alive.
    
    * @beta
    */
    class HttpReply extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Signal fired when a chunk of response data is received, providing an Editor.Buffer with the chunk contents.
        
        * @readonly
        
        * @beta
        */
        onData: signal1<Editor.Buffer, void>
        
        /**
        * Signal fired when the HTTP response has fully completed, providing the final HttpResponse.
        
        * @readonly
        
        * @beta
        */
        onEnd: signal1<import('LensStudio:Network').HttpResponse, void>
        
        /**
        * Signal fired when the HTTP request encounters an error, providing the HttpResponse with error details.
        
        * @readonly
        
        * @beta
        */
        onError: signal1<import('LensStudio:Network').HttpResponse, void>
        
    }

}

declare module "LensStudio:Network" {
    /**
    * A HTTP Request configuration. Use with {@link "LensStudio:Network".performHttpRequestWithReply}.
    
    * @beta
    
    * @example
    * ```js
    * // Note: reply object needs to be stored (e.g. in `this` object of the plugin) 
    * // in order for the network connection to be maintained.
    * const reply = performHttpRequestWithReply(httpRequest);
    * reply.onData.connect((buffer) => {
    *   console.log('Received data chunk: ' + buffer.toString());
    * });
    * reply.onEnd.connect(response => {
    *   console.log(response.statusCode);
    * });
    * reply.onError.connect(response => {});
    * ```
    */
    class HttpRequest {
        /**
        * Constructs a new HttpRequest object for use with performHttpRequest or performAuthorizedHttpRequest.
        
        * @beta
        */
        constructor()
        
        /**
        * Authorization credentials attached to the HTTP request.
        
        * @beta
        */
        authorization: Editor.IAuthorization
        
        /**
        * The body for the HTTP Request.
        
        * @beta
        */
        body: (Uint8Array|import('LensStudio:Network').FormData|string)
        
        /**
        * The content type of the request body.
        
        * @beta
        */
        contentType: string
        
        /**
        * The header for the HTTP request.
        
        * @beta
        */
        headers: any
        
        /**
        * The HTTP method to send the request with.
        
        * @beta
        */
        method: HttpRequest.Method
        
        /**
        * The URL where the request should be made to.
        
        * @beta
        */
        url: string
        
    }

}

declare module "LensStudio:Network" {
    namespace HttpRequest {
        /**
        * The method in which to send the HTTP request. Use with {@link "LensStudio:Network".HttpRequest}.
        
        * @beta
        */
        enum Method {
            /**
            * HTTP GET method, used to retrieve a resource.
            
            * @beta
            */
            Get,
            /**
            * HTTP POST method, used to submit data to a resource.
            
            * @beta
            */
            Post,
            /**
            * HTTP PUT method, used to replace a resource with new data.
            
            * @beta
            */
            Put,
            /**
            * HTTP DELETE method, used to remove a resource.
            
            * @beta
            */
            Delete
        }
    
    }

}

declare module "LensStudio:Network" {
    /**
    * An HTTP response, received from the callback to performing a request, such as through: {@link "LensStudio:Network".performHttpRequestWithReply}, or {@link "LensStudio:RemoteServiceModule".performApiRequest}.
    
    * @beta
    */
    class HttpResponse {
        
        /** @hidden */
        protected constructor()
        
        /**
        * The body of this response.
        
        * @readonly
        
        * @beta
        */
        body: Editor.Buffer
        
        /**
        * The content type of this response.
        
        * @readonly
        
        * @beta
        */
        contentType: string
        
        /**
        * The error of this response, if applicable.
        
        * @readonly
        
        * @beta
        */
        error: string
        
        /**
        * The headers of this response.
        
        * @readonly
        
        * @beta
        */
        headers: any
        
        /**
        * The HTTP status code of this response.
        
        * @readonly
        
        * @beta
        */
        statusCode: number
        
    }

}

declare module "LensStudio:Network" {
    /**
    * A class to accept TCP connetions. Useful for receiving streaming data. It's also able to send back responses.
    */
    class TcpServer extends BaseServer {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Create a TCP Server.
        */
        static create(): TcpServer
        
    }

}

declare module "LensStudio:Network" {
    /**
    * TCP socket for use with {@link "LensStudio:Network".TcpSocket}. 
    
    * @example
    * ```js
    * import * as Network from "LensStudio:Network"
    
    * export default class TcpServerManager {
    *   constructor() {
    *     this.server = Network.TcpServer.create()
    *     this.connections = []
    *     this.sockets = []
    *     this.onClientConnected = null
    *     this.onClientDataReceived = null
    *     this.onClientDisconnected = null
    *     this.onClientSocketError = null
    *     this.enableLogging = false
    
    *     // Setup listeners
    *     this.connections.push(
    *       this.server.onConnect.connect(socket => {
    *         //save sockets to the persistent array so they dont get garbage collected
    *         this.sockets.push(socket)
    
    *         if (this.enableLogging) {
    *           console.log(`Incoming connection from ${socket.remoteAddress.address}:${socket.remoteAddress.port}`)
    *         }
    
    *         if (this.onClientConnected) {
    *           this.onClientConnected(socket)
    *         }
    
    *         this.connections.push(
    *           socket.onData.connect(data => {
    *             if (this.enableLogging) {
    *               console.log(`Received data from socket: ${data}`)
    *             }
    
    *             if (this.onClientDataReceived) {
    *               this.onClientDataReceived(data, socket)
    *             }
    *           })
    *         )
    
    *         this.connections.push(
    *           socket.onEnd.connect(() => {
    *             if (this.enableLogging) {
    *               console.log(`Socket connected to ${socket.remoteAddress.address}:${socket.remoteAddress.port} disconnected from the server.`)
    *             }
    
    *             if (this.onClientDisconnected) {
    *               this.onClientDisconnected(socket)
    *             }
    *           })
    *         )
    
    *         this.connections.push(
    *           socket.onError.connect(error => {
    *             if (this.enableLogging) {
    *               logger.logException(`Socket error: ${error}`)
    *             }
    
    *             if (this.onClientSocketError) {
    *               this.onClientSocketError(error, socket)
    *             }
    *           })
    *         )
    *       })
    *     )
    *   }
    
    *   start (address, port) {
    *     const localhostAddr = new Network.Address()
    *     localhostAddr.address = address
    *     localhostAddr.port = port
    *     try {
    *       this.server.listen(localhostAddr)
    *       console.log(`Server started at ${address}:${port}`)
    *     } catch (e) {
    *       console.log("Failed to start the server: " + e)
    *     }
    *   }
    
    *   close (){
    *     // Disconnect all the connections
    *     this.connections.forEach(connection => connection.disconnect())
    *     this.connections = []
    *     // Close the server
    *     this.server.close()
    *   }
    * }
    * ```
    */
    class TcpSocket extends BaseSocket {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Write to the socket.
        */
        write(data: (Uint8Array|string)): number
        
    }

}

/**
* Module providing overlay plugin infrastructure for Lens Studio.

* @module LensStudio:OverlayPlugin
*/
declare module "LensStudio:OverlayPlugin" {
}

declare module "LensStudio:OverlayPlugin" {
    /**
    * Descriptor used to configure and register an overlay plugin.
    */
    class Descriptor extends BaseDescriptor {
        /**
        * Constructs a new Descriptor for an OverlayPlugin.
        */
        constructor()
        
    }

}

declare module "LensStudio:OverlayPlugin" {
    /**
    * Base class for implementing an overlay plugin, initialized with a plugin system and optional descriptor.
    */
    class OverlayPlugin extends Editor.IPlugin {
        /**
        * Constructs an OverlayPlugin instance with the given plugin system and optional descriptor.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Creates and returns the overlay widget attached to the given parent widget.
        */
        createWidget(parent: import('LensStudio:Ui').Widget): import('LensStudio:Ui').Widget
        
        /**
        * Cleans up and releases resources held by the overlay plugin.
        */
        deinit(): void
        
        /**
        * Requests that the overlay be hidden.
        */
        requestHide(): void
        
        /**
        * Requests that the overlay be shown.
        */
        requestShow(): void
        
        /**
        * The plugin system instance this plugin is registered with.
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* Module providing base classes for creating panel-based plugins in Lens Studio.

* @module LensStudio:PanelPlugin
*/
declare module "LensStudio:PanelPlugin" {
}

declare module "LensStudio:PanelPlugin" {
    /**
    * Configuration descriptor for a PanelPlugin, holding metadata such as id, name, description, and dependencies.
    */
    class Descriptor extends PanelDescriptor {
        /**
        * Constructs a new PanelPlugin descriptor used to plugin metadata such as id, name, description, and dependencies.
        */
        constructor()
        
    }

}

declare module "LensStudio:PanelPlugin" {
    /**
    * Base descriptor class for editor plugins, extended by panel and editor plugin descriptor types.
    */
    class EditorDescriptor extends PanelDescriptor {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:PanelPlugin" {
    /**
    * Descriptor subclass specific to panel plugins, used to register a panel with the editor plugin system.
    */
    class PanelDescriptor extends BaseDescriptor {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Initial dock state of the panel when first opened.
        */
        defaultDockState: import('LensStudio:Ui').DockState
        
        /**
        * Default size of the panel when first created.
        */
        defaultSize: import('LensStudio:Ui').Size
        
        /**
        * Whether only one instance of this panel can exist at a time.
        */
        isUnique: boolean
        
        /**
        * Menu path segments used to place this panel in the application menu.
        */
        menuActionHierarchy: string[]
        
        /**
        * Minimum allowed size of the panel.
        */
        minimumSize: import('LensStudio:Ui').Size
        
        /**
        * Optional toolbar configuration to display in the panel.
        */
        toolbarConfig?: import('LensStudio:Ui').ToolbarConfig
        
    }

}

declare module "LensStudio:PanelPlugin" {
    /**
    * Base class for plugins that create persistent UI panels; extend this and implement createWidget() to build panel UI.
    */
    class PanelPlugin extends IPanelPlugin {
        /**
        * Constructs a new PanelPlugin instance that registers a persistent UI panel within Lens Studio.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Creates and returns the root widget for the panel, parented to the given widget.
        */
        createWidget(parent: import('LensStudio:Ui').Widget): import('LensStudio:Ui').Widget
        
        /**
        * Tears down the plugin and releases any resources it holds.
        */
        deinit(): void
        
        /**
        * The plugin system instance used to resolve interface dependencies.
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* Module providing base classes for writing plugin verifiers that validate plugin behavior in Lens Studio.

* @module LensStudio:PluginVerifier
*/
declare module "LensStudio:PluginVerifier" {
}

declare module "LensStudio:PluginVerifier" {
    /**
    * Metadata descriptor for a plugin verifier, including identity fields and a canVerify predicate that selects which plugins to test.
    */
    class Descriptor extends BaseDescriptor {
        /**
        * Creates a new verifier descriptor instance for configuring plugin verifier metadata.
        */
        constructor()
        
        /**
        * Function that returns true if this verifier should run for the given plugin descriptor.
        */
        canVerify: (arg1: IPluginDescriptor) => any
        
    }

}

declare module "LensStudio:PluginVerifier" {
    /**
    * Base class for plugin verifiers; extend this to implement a verify() method that tests plugin functionality against the editor.
    */
    class PluginVerifier extends Editor.IPlugin {
        /**
        * Constructs a PluginVerifier instance bound to the given plugin system and optional descriptor.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Runs verification tests against a plugin descriptor and writes output artifacts to the specified directory.
        */
        verify(pluginDescriptor: IPluginDescriptor, outputDir: Editor.Path): Promise<void>
        
        /**
        * The plugin system instance this verifier operates within.
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* Module providing the base Preset class and Descriptor for creating editor presets that add objects, assets, or components to a Lens Studio scene.

* @module LensStudio:Preset
*/
declare module "LensStudio:Preset" {
}

declare module "LensStudio:Preset" {
    /**
    * Descriptor subclass for presets, extending BaseDescriptor with preset-specific metadata such as import paths and section.
    */
    class Descriptor extends BaseDescriptor {
        /**
        * Constructs a new Preset Descriptor instance.
        */
        constructor()
        
        /**
        * Specifies the target entity type the preset operates on: 'SceneObject', 'Asset', or 'Component'.
        */
        entityType: string
        
        /**
        * Icon displayed for the preset in the Lens Studio UI, created via Editor.Icon.fromFile().
        */
        icon: Editor.Icon
        
        /**
        * List of asset paths to import when the preset is instantiated.
        */
        pathsToImport: Editor.Path[]
        
        /**
        * Category or group name under which the preset appears in the preset picker UI.
        */
        section: string
        
    }

}

declare module "LensStudio:Preset" {
    /**
    * Base preset class to extend when defining a plugin that creates scene objects, assets, or components; requires a static descriptor() and an async createAsync() method.
    */
    class Preset extends Editor.IPlugin {
        /**
        * Constructs a new Preset instance for defining a custom editor preset that creates scene objects, assets, or components.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Synchronously creates and places a pre-configured entity at the given destination scene object or path.
        */
        create(destination: (Editor.Model.SceneObject|Editor.Path), importSettings?: any): Editor.Model.Entity
        
        /**
        * Asynchronously creates and places a pre-configured entity at the given destination scene object or path.
        */
        createAsync(destination: (Editor.Model.SceneObject|Editor.Path), importSettings?: any): Promise<Editor.Model.Entity>
        
        /**
        * The plugin system instance used to resolve interface dependencies.
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* Module providing preview functionality for Lens Studio.

* @module LensStudio:Preview
*/
declare module "LensStudio:Preview" {
}

declare module "LensStudio:Preview" {
    /**
    * Enum representing the type of preview stream.
    */
    class StreamType {
        
        /** @hidden */
        protected constructor()
        
    }

}

/**
* Module for registering and managing project settings panels in Lens Studio.

* @module LensStudio:ProjectSettingsPlugin
*/
declare module "LensStudio:ProjectSettingsPlugin" {
}

declare module "LensStudio:ProjectSettingsPlugin" {
    /**
    * Configuration descriptor for a project settings plugin, holding the section and title used to register the panel.
    */
    class Descriptor extends BaseDescriptor {
        /**
        * Constructs a new Descriptor instance for configuring a project settings plugin entry.
        */
        constructor()
        
        /**
        * Icon displayed for the settings panel entry.
        */
        icon: Editor.Icon
        
        /**
        * Section name under which this settings panel is grouped.
        */
        section: string
        
        /**
        * Display title shown for this settings panel entry.
        */
        title: string
        
    }

}

declare module "LensStudio:ProjectSettingsPlugin" {
    /**
    * Constructs a project settings plugin bound to the given plugin system and optional descriptor.
    */
    class ProjectSettingsPlugin extends Editor.IPlugin {
        /**
        * Initializes a ProjectSettingsPlugin with a plugin system and optional descriptor.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Creates and returns a UI widget for the project settings panel. The returned widget must be a child of the provided parent widget. Called by the project settings dialog to render the plugin's UI.
        */
        createWidget(parent: import('LensStudio:Ui').Widget): import('LensStudio:Ui').Widget
        
        /**
        * Call to shut down or unloadplugin. Used to clean up resources, listeners, or state.
        */
        deinit(): void
        
        /**
        * Sets the current issue status (errors, warnings, or no issues) for this settings panel. Triggers the issuesChanged signal when statuses change, allowing the settings dialog to update visual indicators.
        */
        setIssues(issues: (import('LensStudio:Ui').ProjectSettings.Error|import('LensStudio:Ui').ProjectSettings.Warning|import('LensStudio:Ui').ProjectSettings.NoIssue)[]): void
        
        /**
        * Reference to the plugin system instance.
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* Plugin component for pushing lens effects and configurations to physical devices.

* @module LensStudio:PushToDevice
*/
declare module "LensStudio:PushToDevice" {
}

/**
* Class for interacting with Snap's RemoteServiceModule. Unlike {@link "LensStudio:Network".performHttpRequestWithReply}, the API requests done here are to specific endpoints that have been registered with Snap.

* @module LensStudio:RemoteServiceModule
*/
declare module "LensStudio:RemoteServiceModule" {
    /**
    * Perform the API request.
    */
    export function performApiRequest(request: RemoteApiRequest, callback: (arg1: RemoteApiResponse) => void): void
    
}

declare module "LensStudio:RemoteServiceModule" {
    /**
    * Configuration for request through {@link "LensStudio:RemoteServiceModule".performApiRequest}
    */
    class RemoteApiRequest {
        
        /** @hidden */
        protected constructor()
        
        /**
        * The body of the request.
        */
        body: (Uint8Array|string)
        
        /**
        * The endpoint of the request (e.g. API path).
        */
        endpoint: string
        
        /**
        * Request parameters as key-value pairs.
        */
        parameters: any
        
        /**
        * The spec id of the RemoteServiceModule. 
        */
        specId: string
        
        /**
        * Create the configuration.
        */
        static create(): RemoteApiRequest
        
    }

}

declare module "LensStudio:RemoteServiceModule" {
    /**
    * Response object from RemoteServiceModule API requests.
    */
    class RemoteApiResponse {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Buffer containing the response body data.
        
        * @readonly
        */
        body: Editor.Buffer
        
        /**
        * Array of resources linked to the response.
        
        * @readonly
        */
        linkedResources: RemoteApiResponse.LinkedResource[]
        
        /**
        * HTTP status code of the response.
        
        * @readonly
        */
        statusCode: number
        
    }

}

declare module "LensStudio:RemoteServiceModule" {
    namespace RemoteApiResponse {
        /**
        * Represents a resource linked to the API response.
        */
        class LinkedResource {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The URL of the linked resource.
            
            * @readonly
            */
            url: string
            
        }
    
    }

}

/**
* Module for script editing capabilities in Lens Studio.

* @module LensStudio:ScriptEditor
*/
declare module "LensStudio:ScriptEditor" {
}

declare module "LensStudio:ScriptEditor" {
    /**
    * Provides definitions and paths for script editor functionality.
    */
    class Definitions {
        
        /** @hidden */
        protected constructor()
        
    }

}

/**
* Before using anything in this namespace, make sure to import `LensStudio:Serialization`.

* @module LensStudio:Serialization
*/
declare module "LensStudio:Serialization" {
}

declare module "LensStudio:Serialization" {
    /**
    * Interface for reading serialized data.
    
    * @beta
    */
    class IReader extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:Serialization" {
    /**
    * Interface for writing serializable data.
    
    * @beta
    */
    class IWriter extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Get the serialized output as a string.
        
        * @beta
        */
        getString(): string
        
    }

}

declare module "LensStudio:Serialization" {
    /**
    * Class which allows you to serialize and deserialize data from YAML. Useful for modifying layout with {@link Editor.Dock.IDockManager}.
    */
    class Yaml {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Create a YAML reader from a string.
        
        * @beta
        */
        static createReader(data: string): IReader
        
        /**
        * Create a YAML writer for serializing data.
        
        * @beta
        */
        static createWriter(): IWriter
        
    }

}

/**
* Before using anything in this namespace, make sure to import `LensStudio:Shell`.

* @module LensStudio:Shell
*/
declare module "LensStudio:Shell" {
    /**
    * Open a URL with optional query parameters in the default browser.
    */
    export function openUrl(baseUrl: string, queryData: any): boolean
    
    /**
    * Reveal a file or folder in the system file explorer.
    */
    export function showItemInFolder(path: Editor.Path): void
    
}

/**
* Toolkit for packaging and distributing Lens Studio projects.

* @module LensStudio:Spk
*/
declare module "LensStudio:Spk" {
}

/**
* Before using anything in this namespace, make sure to import `LensStudio:Subprocess` and add `subprocess` in your plugin's `module.json`.

* @module LensStudio:Subprocess

* @example
* ```js
* // module.json
* {
*     "main": "main.js",
*     "permissions": ["subprocess"]
* }
* ```

* ```js
* // main.js

* import { CoreService } from 'LensStudio:CoreService';
* import * as sb from 'LensStudio:Subprocess';

* ////////////////////////////////////////////////////////////////////////////////////////////////////
* // Helpers that print out some passed in text with some prefix 
* // that will be included with every print out.
* ////////////////////////////////////////////////////////////////////////////////////////////////////

* function createStartedCallback(text) {
*     return function () {
*         console.log('Process: ' + text + ' started');
*     };
* }

* function createStateChangedCallback(text) {
*     return function (state) {
*         console.log('Process: ' + text + ' state changed to: ' + state);
*     };
* }

* function createErrorCallback(text) {
*     return function (errorType) {
*         console.log('Process: ' + text + ' encountered process error of type: ' + errorType);
*     };
* }

* function createExitCallback(text) {
*     return function (exitCode) {
*         console.log('Process: ' + text + ' exited with code ' + exitCode);
*     };
* }

* function createStdOutCallback(text) {
*     return function (data) {
*         console.log('Process: ' + text + ' stdout: ' + data);
*     };
* }

* function createStdErrCallback(text) {
*     return function (data) {
*         console.log('Process: ' + text + ' stderr: ' + data);
*     }   
* }

* ////////////////////////////////////////////////////////////////////////////////////////////////////
* // Core Plugin that gets Python3 Version and Git Status on this plugin's folder. 
* ////////////////////////////////////////////////////////////////////////////////////////////////////
* export class ProcessTest extends CoreService {
*     static descriptor() {
*         return {
*             id: 'snap.test.SubprocessExample',
*             interfaces: CoreService. descriptor().interfaces,
*             name: 'Subprocess Example',
*             description: 'Run some sync and async subprocess.',
*             dependencies: []
*         };
*     }

*     constructor(pluginSystem) {
*         super(pluginSystem);
*     }

*     _subprocessPythonVersion() {
*         // Store subprocess in `this` so we can kill it when the plugin closes
*         this.pythonVersionSubprocess = sb.Subprocess.create('python3', ['--version'], {});
*         
*         // Hook into subprocess
*         const myCommand = this.pythonVersionSubprocess.command;
*         this.connections.push(this.pythonVersionSubprocess.started.connect(createStartedCallback(myCommand)));
*         this.connections.push(this.pythonVersionSubprocess.stateChanged.connect(createStateChangedCallback(myCommand)));
*         this.connections.push(this.pythonVersionSubprocess.errored.connect(createErrorCallback(myCommand)));
*         this.connections.push(this.pythonVersionSubprocess.exited.connect(createExitCallback(myCommand)));
*         this.connections.push(this.pythonVersionSubprocess.stdout.connect(createStdOutCallback(myCommand)));
*         this.connections.push(this.pythonVersionSubprocess.stderr.connect(createStdErrCallback(myCommand)));

*         // Start the process
*         this.pythonVersionSubprocess.start();

*         // Write to stdin
*         for (let i = 0; i < 5; i++) {
*             this.pythonVersionSubprocess.stdin.writeString('Hello, world: ' + i + '\n');
*             sb.spawnSync('sleep', ['1'], {});
*         }
*     }

*     _subprocessSyncGitStatus() {
*         const pluginFolder = import.meta.resolve(".");
*         const options = {
*             cwd: new Editor.Path(pluginFolder)
*         }

*         const result = sb.spawnSync('git', ['status'], options);

*         console.log('success: ' + result.success);
*         console.log('stdout: ' + result.stdout);
*         console.log('stderr: ' + result.stderr);
*         console.log('exitCode: ' + result.exitCode);
*     }

*     start() {
*         this.connections = [];

*         console.log("Start: subprocess for Git Status ------------------------------");
*         this._subprocessSyncGitStatus();
*         console.log("Done: subprocess for Git Status -------------------------------");
*         
*         console.log("Start: subprocess for Python3 Version -------------------------");
*         this._subprocessPythonVersion();
*     }

*     stop() {
*         // Need to kill the asynchronus process we started in `subprocessPythonVersion`.
*         // For example when the app closes, or user disables the plugin.
*         this.pythonVersionSubprocess.kill();
*         console.log("Done: subprocess for Python3 Version --------------------------");
*     }
* }
* ```
*/
declare module "LensStudio:Subprocess" {
    /**
    * the options parameter can take `cwd` and `timeout`, meaning the current working directory to launch the program in, as well as the milliseconds to wait for a synchronously spawned subprocess to finish. By default, `cwd` is set to the current directory of the Lens Studio application, and timeout is set to 30000.
    */
    export function spawn(command: string, args: string[], options: SpawnOptions): Subprocess
    
    /**
    * the options parameter can take `cwd` and `timeout`, meaning the current working directory to launch the program in, as well as the milliseconds to wait for a synchronously spawned subprocess to finish. By default, `cwd` is set to the current directory of the Lens Studio application, and timeout is set to 30000.
    */
    export function spawnSync(command: string, args: string[], options: SpawnOptions): SpawnSyncResult
    
}

declare module "LensStudio:Subprocess" {
    /**
    * The exit status of a {@link "LensStudio:Subprocess".spawn} or {@link "LensStudio:Subprocess".spawnSync}. 
    */
    enum ExitStatus {
        /**
        * The process exited normally.
        */
        NormalExit,
        /**
        * The process exited due to a crash.
        */
        CrashExit
    }

}

declare module "LensStudio:Subprocess" {
    /**
    * The process error of a {@link "LensStudio:Subprocess".spawn} or {@link "LensStudio:Subprocess".spawnSync}. 
    */
    enum ProcessError {
        /**
        * Process failed to start.
        */
        FailedToStart,
        /**
        * Process crashed during execution.
        */
        Crashed,
        /**
        * Process execution timed out.
        */
        Timedout,
        /**
        * Error reading from process.
        */
        ReadError,
        /**
        * Error writing to process.
        */
        WriteError,
        /**
        * Unknown process error occurred.
        */
        UnknownError
    }

}

declare module "LensStudio:Subprocess" {
    /**
    * The process state of a {@link "LensStudio:Subprocess".spawn} or {@link "LensStudio:Subprocess".spawnSync}. 
    */
    enum ProcessState {
        /**
        * Process is not running.
        */
        Idle,
        /**
        * Process is initializing and starting up.
        */
        Starting,
        /**
        * Process is actively running.
        */
        Running
    }

}

declare module "LensStudio:Subprocess" {
    /**
    * The options of {@link "LensStudio:Subprocess".spawn} or {@link "LensStudio:Subprocess".spawnSync}.  `env`, can be specified as a `{PATH: myPath, PWD: myPwd}` or a JS object. The PATH and PWD fields will override the default value in your environment has when the subprocess is spawned.   You can access the default environment variables from {@link "LensStudio:App"},  where its a constant value that you can retrieve just like `.version`, using `.env`.
    */
    class SpawnOptions {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Working directory path for the spawned process.
        */
        cwd: Editor.Path
        
        /**
        * Environment variables for the spawned process.
        */
        env: any
        
        /**
        * Maximum time in milliseconds for the process to complete.
        */
        timeout: number
        
    }

}

declare module "LensStudio:Subprocess" {
    /**
    * The result of {@link "LensStudio:Subprocess".spawnSync}. 
    */
    class SpawnSyncResult {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Process exit code.
        
        * @readonly
        */
        exitCode: number
        
        /**
        * Standard error output from the process.
        
        * @readonly
        */
        stderr: Editor.Buffer
        
        /**
        * Standard output from the process.
        
        * @readonly
        */
        stdout: Editor.Buffer
        
    }

}

declare module "LensStudio:Subprocess" {
    /**
    * Class which allows you to trigger a subproccess outside of Lens Studio (e.g. a command line command).
    */
    class Subprocess extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Kills a subprocess.
        */
        kill(): void
        
        /**
        * Starts a subprocess.
        */
        start(): void
        
        /**
        * The command for the subprocess.
        
        * @readonly
        */
        command: string
        
        /**
        * A handle for getting callback when a subprocess' state has errored.
        
        * @readonly
        */
        onError: signal1<number, void>
        
        /**
        * A handle for getting callback when a subprocess' state has exited.
        
        * Callback will receive two arguments in order:
        * Exit code (usually 0 means success)
        * Exit status (0 on normal exit, 1 on crash)
        
        
        * @readonly
        */
        onExit: signal2<number, number, void>
        
        /**
        * A handle for getting callback when a subprocess is started
        
        * @readonly
        */
        onStart: signal0<void>
        
        /**
        * A handle for getting callback when a subprocess' state has changed.
        
        * Callback will receive a number describing a state. 
        
        * Possible states:
        * Not running  0
        * Starting  1
        * Running  2
        
        
        * @readonly
        */
        onStateChange: signal1<number, void>
        
        /**
        * A handle for getting callback when a subprocess' state has received stderr.
        
        * @readonly
        */
        stderr: signal1<Editor.Buffer, void>
        
        /**
        * A handle for getting callback when a subprocess' state has received stdin.
        
        * @readonly
        */
        stdin: Writable
        
        /**
        * A handle for getting callback when a subprocess' state has received stdout.
        
        * @readonly
        */
        stdout: signal1<Editor.Buffer, void>
        
        /**
        * Create a subprocess.
        */
        static create(command: string, args: string[], options: SpawnOptions): Subprocess
        
    }

}

declare module "LensStudio:Subprocess" {
    /**
    * Stream interface for writing to subprocess stdin.
    */
    class Writable extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Write data to the stream and return the number of bytes written.
        */
        write(data: (Uint8Array|string)): number
        
    }

}

/**
* Provides system information for Lens Studio.

* @module LensStudio:SysInfo
*/
declare module "LensStudio:SysInfo" {
    /**
    * String identifier for the product type.
    */
    let productType: string
    
}

/**
* @module LensStudio:TypeScript
*/
declare module "LensStudio:TypeScript" {
}

declare module "LensStudio:TypeScript" {
    class ITypeScriptCompilationApi extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        refreshProjectCompilation(): Promise<TypeScriptCompilationResult>
        
        runIsolatedCompilation(tsconfigPath: string): Promise<TypeScriptCompilationResult>
        
        static interfaceId: Editor.InterfaceId
        
    }

}

declare module "LensStudio:TypeScript" {
    class TypeScriptCompilationResult {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @readonly
        */
        errors: string[]
        
        /**
        * @readonly
        */
        succeeded: boolean
        
    }

}

/**
* Before using anything in this namespace, make sure to import `LensStudio:Ui`.

* @module LensStudio:Ui
*/
declare module "LensStudio:Ui" {
    /**
    * Retrieve a URL string representation.
    */
    export function getUrlString(displayText: string, url: string): string
    
}

declare module "LensStudio:Ui" {
    /**
    * Base class for button widgets with icon and state support.
    */
    class AbstractButton extends Widget {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Set the button's icon.
        */
        setIcon(icon: Editor.Icon): void
        
        /**
        * Set the button's icon dimensions.
        */
        setIconSize(w: number, h: number): void
        
        /**
        * Whether the button is checkable (toggleable).
        */
        checkable: boolean
        
        /**
        * Current checked state of the button.
        */
        checked: boolean
        
        /**
        * The button's display text.
        */
        text: string
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Base class for menu widgets.
    */
    class AbstractMenu extends Widget {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Add an action to the menu.
        */
        addAction(action: Action): void
        
        /**
        * Add a submenu with the given caption.
        */
        addMenu(caption: string): AbstractMenu
        
        /**
        * Add a separator to the menu.
        */
        addSeparator(): void
        
        /**
        * Display the menu at the target widget's location.
        */
        popup(target: Widget): void
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Represents an action that can be triggered in the UI.
    */
    class Action extends ScriptObject {
        /**
        * Create an Action instance for use with menu hierarchies and toolbar configurations.
        */
        constructor(parent: Widget)
        
        /**
        * Block or unblock signals from being emitted by this action.
        */
        blockSignals(blocked: boolean): void
        
        /**
        * Whether this action can be checked or toggled.
        */
        checkable: boolean
        
        /**
        * Current checked state of this action.
        */
        checked: boolean
        
        /**
        * Icon displayed for this action.
        */
        icon: Editor.Icon
        
        /**
        * Whether the icon is visible in menus.
        */
        iconVisibleInMenu: boolean
        
        /**
        * Signal emitted when this action is toggled.
        
        * @readonly
        */
        onToggle: signal1<boolean, void>
        
        /**
        * Signal emitted when this action is triggered.
        
        * @readonly
        */
        onTrigger: signal1<boolean, void>
        
        /**
        * Text label displayed for this action.
        */
        text: string
        
        /**
        * Tooltip text shown when hovering over this action.
        */
        toolTip: string
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying text or widget alignment.
    */
    enum Alignment {
        /**
        * Default alignment value.
        */
        Default,
        /**
        * Align to the leading edge (start).
        */
        AlignLeading,
        /**
        * Align to the left.
        */
        AlignLeft,
        /**
        * Align to the right.
        */
        AlignRight,
        /**
        * Align to the trailing edge (end).
        */
        AlignTrailing,
        /**
        * Align horizontally to center.
        */
        AlignHCenter,
        /**
        * Justify alignment.
        */
        AlignJustify,
        /**
        * Absolute positioning alignment.
        */
        AlignAbsolute,
        /**
        * Mask for horizontal alignment flags.
        */
        AlignHorizontal_Mask,
        /**
        * Align to the top.
        */
        AlignTop,
        /**
        * Align to the bottom.
        */
        AlignBottom,
        /**
        * Align vertically to center.
        */
        AlignVCenter,
        /**
        * Align to center.
        */
        AlignCenter,
        /**
        * Align to baseline.
        */
        AlignBaseline,
        /**
        * Mask for vertical alignment flags.
        */
        AlignVertical_Mask
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying arrow position for callouts.
    */
    enum ArrowPosition {
        /**
        * Position arrow at the top.
        */
        Top,
        /**
        * Position arrow at the bottom.
        */
        Bottom
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum controlling aspect ratio scaling behavior.
    */
    enum AspectRatioMode {
        /**
        * Ignore aspect ratio constraints.
        */
        IgnoreAspectRatio,
        /**
        * Maintain the aspect ratio.
        */
        KeepAspectRatio,
        /**
        * Maintain the aspect ratio by expanding as needed.
        */
        KeepAspectRatioByExpanding
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying background color role.
    */
    enum BackgroundRole {
        /**
        * Application main window background
        */
        WindowBackground,
        /**
        * Secondary panel background
        */
        PanelBackground,
        /**
        * Standard component background
        */
        ComponentBackground,
        /**
        * Popup/tooltip background
        */
        PopupBackground,
        /**
        * Button and clickable element background
        */
        ButtonBackground,
        /**
        * Text input and form field background
        */
        InputBackground,
        /**
        * Call-To-Action button background
        */
        CtaBackground
    }

}

declare module "LensStudio:Ui" {
    /**
    * Layout manager arranging widgets in a row or column.
    */
    class BoxLayout extends Layout {
        /**
        * Construct a BoxLayout for arranging widgets in a linear direction.
        */
        constructor()
        
        /**
        * Adds a child layout to this BoxLayout. The child layout is appended in the current direction (left-to-right or top-to-bottom).
        */
        addLayout(layout: Layout): void
        
        /**
        * Adds a stretch space (spacer) with the specified stretch factor. Higher stretch values take more available space proportionally. Default factor is 0 (fixed space).
        */
        addStretch(stretch: number): void
        
        /**
        * Adds a widget to the layout with an optional stretch factor and alignment. The stretch determines how much space the widget claims; alignment controls its position within its allocated space.
        */
        addWidgetWithStretch(widget: Widget, stretch: number, alignment: Alignment): void
        
        /**
        * Sets the layout direction (LeftToRight, RightToLeft, TopToBottom, BottomToTop). Controls whether widgets are arranged horizontally or vertically.
        */
        setDirection(direction: Direction): void
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget displaying a callout or tooltip with optional arrow.
    */
    class CalloutFrame extends Widget {
        /**
        * Construct a CalloutFrame UI widget.
        */
        constructor(parent: Widget)
        
        /**
        * Set the background color of the callout frame.
        */
        setBackgroundColor(color: Color): void
        
        /**
        * Set the background role and color group for the callout frame.
        */
        setBackgroundRole(role: BackgroundRole, group: ColorGroup): void
        
        /**
        * Set the foreground color of the callout frame.
        */
        setForegroundColor(color: Color): void
        
        /**
        * Set the foreground role and color group for the callout frame.
        */
        setForegroundRole(role: ForegroundRole, group: ColorGroup): void
        
        /**
        * Width of the callout frame border in pixels.
        */
        lineWidth: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget for toggling a boolean state.
    */
    class CheckBox extends AbstractButton {
        /**
        * Construct a new CheckBox widget.
        */
        constructor(parent: Widget)
        
        /**
        * The current state of the checkbox.
        */
        checkState: CheckState
        
        /**
        * Signal emitted when the checkbox is toggled.
        
        * @readonly
        */
        onToggle: signal1<boolean, void>
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum representing checkbox state.
    */
    enum CheckState {
        /**
        * Unchecked state.
        */
        Unchecked,
        /**
        * Partially checked state.
        */
        PartiallyChecked,
        /**
        * Checked state.
        */
        Checked
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum controlling layout clearing behavior.
    */
    enum ClearLayoutBehavior {
        /**
        * Delete widgets when the layout is cleared.
        */
        DeleteClearedWidgets,
        /**
        * Preserve widgets when the layout is cleared.
        */
        KeepClearedWidgets
    }

}

declare module "LensStudio:Ui" {
    /**
    * Label widget that responds to mouse clicks.
    */
    class ClickableLabel extends Label {
        /**
        * Constructor for ClickableLabel widget.
        */
        constructor(parent: Widget)
        
        /**
        * Signal emitted when the label is clicked.
        
        * @readonly
        */
        onClick: signal0<void>
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Event triggered when a window or dialog closes.
    */
    class CloseEvent extends Event {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget panel that can be expanded or collapsed.
    */
    class CollapsiblePanel extends Widget {
        /**
        * Constructor for CollapsiblePanel widget.
        */
        constructor(icon: Editor.Icon, text: string, parent: Widget)
        
        /** @internal */
        static create(widget: CollapsiblePanel): CollapsiblePanel
        
        /**
        * Remove all content from the collapsible panel.
        */
        clearContent(): void
        
        /**
        * Set the panel expanded or collapsed state.
        */
        expand(value: boolean): void
        
        /**
        * Set the widget displayed inside the collapsible panel.
        */
        setContentWidget(widget: Widget): void
        
        /**
        * Background color role for the panel header.
        */
        customBackgroundRole: BackgroundRole
        
        /**
        * Whether the panel can be expanded or collapsed.
        */
        expandable: boolean
        
        /**
        * Signal emitted when the panel is expanded or collapsed.
        
        * @readonly
        */
        onExpand: signal1<boolean, void>
        
        /**
        * If true - the panel explicitly paints its background using the color from the color scheme for the role specified in customBackgroundRole. If false - the panel uses the default widget background, allowing parent theming to apply
        */
        overrideBackgroundRole: boolean
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Represents an RGBA color value.
    */
    class Color {
        /**
        * Construct a new Color instance.
        */
        constructor()
        
        /**
        * Alpha (opacity) component of the color.
        */
        alpha: number
        
        /**
        * Blue component of the color.
        */
        blue: number
        
        /**
        * Green component of the color.
        */
        green: number
        
        /**
        * Red component of the color.
        */
        red: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Button for selecting or displaying a color.
    */
    class ColorButton extends PushButton {
        /**
        * Constructor for ColorButton widget.
        */
        constructor(parent: Widget)
        
        /**
        * Update the tooltip automatically based on current state.
        */
        setAutoUpdateToolTip(autoUpdateToolTip: boolean): void
        
        /**
        * Whether the alpha channel is enabled in the color picker.
        */
        alphaEnabled: boolean
        
        /**
        * Emitted when a color is accepted in the picker.
        
        * @readonly
        */
        colorAccepted: signal1<import('LensStudio:Ui').Color, void>
        
        /**
        * Emitted when the color picker is closed without accepting.
        
        * @readonly
        */
        colorRejected: signal1<import('LensStudio:Ui').Color, void>
        
        /**
        * Emitted when the color value changes during selection.
        
        * @readonly
        */
        colorValueChanged: signal1<import('LensStudio:Ui').Color, void>
        
        /**
        * The currently displayed color in the button.
        */
        currentColor: Color
        
        /**
        * Emitted when the color picker dialog is closed.
        
        * @readonly
        */
        dialogClosed: signal0<void>
        
        /**
        * Emitted when the color picker dialog is created.
        
        * @readonly
        */
        dialogCreated: signal1<import('LensStudio:Ui').Color, void>
        
        /**
        * Whether the color picker dialog is currently open.
        
        * @readonly
        */
        isDialogActive: boolean
        
        /**
        * The last color value that was accepted by the user.
        
        * @readonly
        */
        lastAcceptedColor: Color
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying color group role.
    */
    enum ColorGroup {
        /**
        * Base color state.
        */
        Base,
        /**
        * Normal color state.
        */
        Normal,
        /**
        * Hover color state.
        */
        Hover,
        /**
        * Pressed color state.
        */
        Pressed,
        /**
        * Disabled color state.
        */
        Disabled,
        /**
        * Read-only color state.
        */
        ReadOnly,
        /**
        * Color state for disabled elements in hierarchy.
        */
        DisabledInHierarchy
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying color role for styling.
    */
    enum ColorRole {
        /**
        * Color for window text elements.
        */
        WindowText,
        /**
        * Color for button backgrounds.
        */
        Button,
        /**
        * Light color variant.
        */
        Light,
        /**
        * Midlight color variant.
        */
        Midlight,
        /**
        * Dark color variant.
        */
        Dark,
        /**
        * Mid color variant.
        */
        Mid,
        /**
        * Color for text elements.
        */
        Text,
        /**
        * Color for bright text elements.
        */
        BrightText,
        /**
        * Color for button text.
        */
        ButtonText,
        /**
        * Base color for input areas and backgrounds.
        */
        Base,
        /**
        * Color for window backgrounds.
        */
        Window,
        /**
        * Color for shadow effects.
        */
        Shadow,
        /**
        * Color for highlighted elements.
        */
        Highlight,
        /**
        * Color for highlighted text.
        */
        HighlightedText,
        /**
        * Color for hyperlink text.
        */
        Link,
        /**
        * Color for visited hyperlinks.
        */
        LinkVisited,
        /**
        * Alternate base color for contrast.
        */
        AlternateBase,
        /**
        * No color role assigned.
        */
        NoRole,
        /**
        * Color for tooltip backgrounds.
        */
        ToolTipBase,
        /**
        * Color for tooltip text.
        */
        ToolTipText,
        /**
        * Color for placeholder text.
        */
        PlaceholderText
    }

}

declare module "LensStudio:Ui" {
    /**
    * Dropdown widget for selecting from a list of options.
    */
    class ComboBox extends Widget {
        /**
        * Constructor for ComboBox widget.
        */
        constructor(parent: Widget)
        
        /**
        * Add an item with an associated icon to the combo box.
        */
        addIconItem(icon: Editor.Icon, text: string): void
        
        /**
        * Add a text item to the combo box.
        */
        addItem(text: string): void
        
        /**
        * Remove all items from the combo box.
        */
        clear(): void
        
        /**
        * Set the icon for an item at the specified index.
        */
        setItemIcon(index: number, icon: Editor.Icon): void
        
        /**
        * The text of the currently selected item.
        */
        currentText: string
        
        /**
        * Signal emitted when the selected item changes.
        
        * @readonly
        */
        onCurrentTextChange: signal1<string, void>
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum controlling context menu behavior.
    */
    enum ContextMenuPolicy {
        /**
        * No context menu is shown.
        */
        NoContextMenu,
        /**
        * Shows the default context menu.
        */
        DefaultContextMenu,
        /**
        * Shows a custom context menu.
        */
        ActionsContextMenu,
        /**
        * Disables automatic menu generation. The widget emits customContextMenuRequested(QPoint) signal on right-click, allowing the application to display a custom menu. Most flexible option for complex menus.
        */
        CustomContextMenu,
        /**
        * Prevents any context menu from appearing.
        */
        PreventContextMenu
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying mouse cursor shape.
    */
    enum CursorShape {
        /**
        * Standard arrow cursor.
        */
        ArrowCursor,
        /**
        * Upward-pointing arrow cursor.
        */
        UpArrowCursor,
        /**
        * Crosshair cursor.
        */
        CrossCursor,
        /**
        * Wait/loading cursor.
        */
        WaitCursor,
        /**
        * Text input cursor.
        */
        IBeamCursor,
        /**
        * Vertical resize cursor.
        */
        SizeVerCursor,
        /**
        * Horizontal resize cursor.
        */
        SizeHorCursor,
        /**
        * Backslash diagonal resize cursor.
        */
        SizeBDiagCursor,
        /**
        * Forward diagonal resize cursor.
        */
        SizeFDiagCursor,
        /**
        * Omnidirectional resize cursor.
        */
        SizeAllCursor,
        /**
        * Blank/invisible cursor.
        */
        BlankCursor,
        /**
        * Vertical split cursor.
        */
        SplitVCursor,
        /**
        * Horizontal split cursor.
        */
        SplitHCursor,
        /**
        * Pointing hand cursor.
        */
        PointingHandCursor,
        /**
        * Forbidden/prohibited cursor.
        */
        ForbiddenCursor,
        /**
        * Help/what's this cursor.
        */
        WhatsThisCursor,
        /**
        * Busy cursor.
        */
        BusyCursor,
        /**
        * Open hand cursor.
        */
        OpenHandCursor,
        /**
        * Closed/grabbing hand cursor.
        */
        ClosedHandCursor,
        /**
        * Drag to copy cursor.
        */
        DragCopyCursor,
        /**
        * Drag to move cursor.
        */
        DragMoveCursor,
        /**
        * Drag to link cursor.
        */
        DragLinkCursor
    }

}

declare module "LensStudio:Ui" {
    /**
    * Modal or modeless dialog window.
    */
    class Dialog extends Widget {
        /**
        * Constructor for Dialog class.
        */
        constructor(parent: Widget)
        
        /**
        * Close the dialog with accepted status.
        */
        accept(): void
        
        /**
        * Close the dialog with a specific result code.
        */
        done(code: number): void
        
        /**
        * Run the dialog modally and return the result code.
        */
        exec(): number
        
        /**
        * Display the dialog non-modally.
        */
        open(): void
        
        /**
        * Close the dialog with rejected status.
        */
        reject(): void
        
        /**
        * Set whether the dialog blocks interaction with other windows.
        */
        setModal(modal: boolean): void
        
        /**
        * Signal emitted when the dialog closes.
        
        * @readonly
        */
        onFinish: signal1<number, void>
        
    }

}

declare module "LensStudio:Ui" {
    namespace Dialog {
        /**
        * Enum of dialog result codes (Accepted, Rejected).
        */
        enum Code {
            /**
            * Dialog was rejected or cancelled by the user.
            */
            Rejected,
            /**
            * Dialog was accepted or confirmed by the user.
            */
            Accepted
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace Dialogs {
        /**
        * Options for file dialog behavior: Usual for standard selection or DirectoriesOnly to restrict to directories.
        */
        enum Options {
            /**
            * Standard file dialog with standard filters.
            */
            Usual,
            /**
            * File dialog restricted to directories only.
            */
            DirectoriesOnly
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace Dialogs {
        /**
        * Configuration parameters for file dialogs including caption, file filter, and display options.
        */
        class Params {
            
            /** @hidden */
            protected constructor()
            
            /**
            * Title text displayed in the dialog.
            */
            caption: string
            
            /**
            * File type filter pattern for the dialog.
            */
            filter: string
            
            /**
            * Additional dialog behavior options.
            */
            options: Dialogs.Options
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum for layout direction in box layouts.
    */
    enum Direction {
        /**
        * Layout flows from left to right.
        */
        LeftToRight,
        /**
        * Layout flows from right to left.
        */
        RightToLeft,
        /**
        * Layout flows from top to bottom.
        */
        TopToBottom,
        /**
        * Layout flows from bottom to top.
        */
        BottomToTop
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum representing dock widget state.
    */
    enum DockState {
        /**
        * Dock state when the UI element is attached.
        */
        Attached,
        /**
        * Dock state when the UI element is detached.
        */
        Detached
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget for entering floating-point numbers.
    */
    class DoubleSpinBox extends Widget {
        /**
        * Constructor for DoubleSpinBox widget.
        */
        constructor(parent: Widget)
        
        /**
        * Sets the minimum and maximum range for the spin box.
        */
        setRange(min: number, max: number): void
        
        /**
        * Signal fired when the value changes, receives the new Number value.
        
        * @readonly
        */
        onValueChange: signal1<number, void>
        
        /**
        * The increment/decrement step value.
        */
        singleStep: number
        
        /**
        * Current value.
        */
        value: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Manages text and code editors.
    */
    class EditorsManager extends IEditorsManager {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:Ui" {
    class Event extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        accept(): void
        
        ignore(): void
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying font role for styling.
    */
    enum FontRole {
        /**
        * Default font role.
        */
        Default,
        /**
        * First font role.
        */
        First,
        /**
        * Default font role with underline.
        */
        DefaultUnderlined,
        /**
        * Default font role with bold weight.
        */
        DefaultBold,
        /**
        * Default font role with italic style.
        */
        DefaultItalic,
        /**
        * Small font role.
        */
        Small,
        /**
        * Monospace font role.
        */
        Monospace,
        /**
        * Small title font role.
        */
        SmallTitle,
        /**
        * Title font role.
        */
        Title,
        /**
        * Title font role with bold weight.
        */
        TitleBold,
        /**
        * Medium title font role.
        */
        MediumTitle,
        /**
        * Medium title font role with bold weight.
        */
        MediumTitleBold,
        /**
        * Large title font role.
        */
        LargeTitle,
        /**
        * Large title font role with bold weight.
        */
        LargeTitleBold
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying foreground color role.
    */
    enum ForegroundRole {
        /**
        * Primary content text color role.
        */
        Content,
        /**
        * Active or selected content text color role.
        */
        ActiveContent,
        /**
        * Placeholder or hint text color role.
        */
        PlaceholderContent,
        /**
        * Hyperlink text color role.
        */
        Link,
        /**
        * Highlighted text color role.
        */
        Highlight,
        /**
        * Focused element text color role.
        */
        Focus,
        /**
        * Inner divider line color role.
        */
        DividerIn,
        /**
        * Outer divider line color role.
        */
        DividerOut,
        /**
        * Input field outline color role.
        */
        InputOutline,
        /**
        * Button outline color role.
        */
        ButtonOutline,
        /**
        * Region selection indicator color role.
        */
        RegionSelection,
        /**
        * Red accent color role.
        */
        ColorRed,
        /**
        * Orange accent color role.
        */
        ColorOrange,
        /**
        * Yellow accent color role.
        */
        ColorYellow,
        /**
        * Green accent color role.
        */
        ColorGreen
    }

}

declare module "LensStudio:Ui" {
    /**
    * Arranges child layouts and widgets in a grid with rows and columns.
    */
    class GridLayout extends Layout {
        /**
        * Constructor for a grid layout container that arranges child widgets in rows and columns.
        */
        constructor()
        
        /**
        * Add a layout to the grid at a specific row and column with alignment.
        */
        addLayout(layout: Layout, row: number, column: number, alignment: Alignment): void
        
        /**
        * Add a widget to the grid at a specific row and column with alignment.
        */
        addWidgetAt(widget: Widget, row: number, column: number, alignment: Alignment): void
        
        /**
        * Add a widget to the grid spanning multiple rows and columns with alignment.
        */
        addWidgetWithSpan(widget: Widget, fromRow: number, fromColumn: number, rowSpan: number, columnSpan: number, alignment: Alignment): void
        
        /**
        * Get the minimum width of a column.
        */
        getColumnMinimumWidth(column: number): number
        
        /**
        * Get the stretch factor of a column.
        */
        getColumnStretch(column: number): number
        
        /**
        * Get the minimum height of a row.
        */
        getRowMinimumHeight(row: number): number
        
        /**
        * Get the stretch factor of a row.
        */
        getRowStretch(row: number): number
        
        /**
        * Set the minimum width of a column.
        */
        setColumnMinimumWidth(column: number, minSize: number): void
        
        /**
        * Set the stretch factor of a column.
        */
        setColumnStretch(column: number, stretch: number): void
        
        /**
        * Set the minimum height of a row.
        */
        setRowMinimumHeight(row: number, minSize: number): void
        
        /**
        * Set the stretch factor of a row.
        */
        setRowStretch(row: number, stretch: number): void
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Built-in interface for GUI operations in plugins.
    */
    class Gui extends IGui {
        
        /** @hidden */
        protected constructor()
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying icon display mode.
    */
    enum IconMode {
        /**
        * Monochrome icon rendering mode.
        */
        MonoChrome,
        /**
        * Regular icon rendering mode.
        */
        Regular
    }

}

declare module "LensStudio:Ui" {
    /**
    * Interface for file and message dialogs.
    */
    class IDialogs extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Open a file selection dialog and return the selected file path.
        */
        selectFileToOpen(params: Dialogs.Params, defaultPath: Editor.Path): Editor.Path
        
        /**
        * Open a file save dialog and return the selected file path.
        */
        selectFileToSave(params: Dialogs.Params, defaultPath: Editor.Path): Editor.Path
        
        /**
        * Open a file selection dialog allowing multiple selections and return an array of selected file paths.
        */
        selectFilesToOpen(params: Dialogs.Params, defaultPath: Editor.Path): Editor.Path[]
        
        /**
        * Returns selected path, or an empty path if the dialog was cancelled.
        
        */
        selectFolderToOpen(params: Dialogs.Params, defaultPath: Editor.Path): Editor.Path
        
        /**
        * Open a folder selection dialog for saving and return the selected folder path.
        */
        selectFolderToSave(params: Dialogs.Params, defaultPath: Editor.Path): Editor.Path
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Interface for text editor management.
    */
    class IEditorsManager extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Open editors for the specified entity with optional plugin-specific configurations.
        */
        openEditors(entity: Editor.Model.Entity, editorPluginIds?: any): void
        
        /**
        * Interface identifier for retrieving this plugin component.
        */
        static interfaceId: Editor.InterfaceId
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Main interface for accessing UI dialogs, widgets, and workspaces in Lens Studio.
    */
    class IGui extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Create a new dialog window.
        */
        createDialog(): Dialog
        
        /**
        * Create a new widget.
        */
        createWidget(): Widget
        
        /**
        * Manager for all open dialogs.
        
        * @readonly
        */
        dialogs: IDialogs
        
        /**
        * Manager for workspace layouts and panels.
        
        * @readonly
        
        * @beta
        */
        workspaces: IWorkspaceManager
        
        /**
        * Interface identifier for IGui.
        */
        static interfaceId: Editor.InterfaceId
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget displaying an image.
    */
    class ImageView extends Widget {
        /**
        * Create an ImageView widget for displaying images in the Lens Studio UI.
        */
        constructor(parent: Widget)
        
        /**
        * Signal emitted when the image view is clicked.
        
        * @readonly
        */
        onClick: signal0<void>
        
        /**
        * Signal emitted when hover state changes over the image view.
        
        * @readonly
        */
        onHover: signal1<boolean, void>
        
        /**
        * The pixmap image to display.
        */
        pixmap: Pixmap
        
        /**
        * The border radius of the image view corners.
        */
        radius: number
        
        /**
        * Enable hover response behavior.
        */
        responseHover: boolean
        
        /**
        * Controls whether the image (pixmap) is scaled to fit the dimensions of the ImageView widget. Setting it to true will scale the image to match the widget size, while false will display the image at its original size.
        */
        scaledContents: boolean
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Interface for workspace management.
    */
    class IWorkspaceManager extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Create a workspace from a descriptor.
        */
        create(descriptor: Workspaces.Descriptor): Workspaces.Workspace
        
        /**
        * Check if a descriptor is registered.
        */
        isRegistered(descriptor: Workspaces.Descriptor): boolean
        
        /**
        * Read a workspace descriptor from a directory path.
        */
        readDescriptor(presetDirPath: Editor.Path): Workspaces.Descriptor | undefined
        
        /**
        * Register a workspace descriptor and return a preset handle.
        */
        register(descriptor: Workspaces.Descriptor): Workspaces.PresetHandle
        
        /**
        * Unregister a workspace by its preset handle.
        */
        unregister(handle: Workspaces.PresetHandle): void
        
        /**
        * Array of all available workspaces.
        
        * @readonly
        */
        all: Workspaces.Workspace[]
        
        /**
        * Emitted just before a workspace becomes the current active workspace during setCurrent(). Allows listeners to prepare for activation.
        
        * @readonly
        */
        onAboutToBeActivated: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * Emitted just before a workspace is inserted into the manager's list. Fires during add() before the workspace is added to the internal collection.
        
        * @readonly
        */
        onAboutToBeAdded: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * Emitted just before the current workspace is deactivated when switching to another workspace. Allows listeners to save state or cleanup.
        
        * @readonly
        */
        onAboutToBeDeactivated: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * Emitted just before a workspace is removed from the manager. Fires during remove() before the workspace is ejected from the list, allowing state saving.
        
        * @readonly
        */
        onAboutToBeRemoved: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * Emitted after a workspace has been successfully activated and is now current. Fires after the tab index is set and the workspace is ready for use.
        
        * @readonly
        */
        onActivated: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * Emitted after a workspace has been successfully added to the manager and its tab created. Fires after the workspace is inserted into the internal list.
        
        * @readonly
        */
        onAdded: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * Emitted after a workspace is fully initialized with its layout loaded and panel properties deserialized. Indicates the workspace is ready for interaction.
        
        * @readonly
        */
        onCreated: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * Emitted after a workspace has been deactivated and is no longer current. Fires after another workspace is activated.
        
        * @readonly
        */
        onDeactivated: signal1<import('LensStudio:Ui').Workspaces.Workspace, void>
        
        /**
        * Emitted after a workspace is successfully removed from the manager. Passes the workspace's metadata (not the object itself, as it may be destroyed).
        
        * @readonly
        */
        onRemoved: signal1<import('LensStudio:Ui').Workspaces.Metadata, void>
        
    }

}

declare module "LensStudio:Ui" {
    enum Key {
        Key_Space,
        Key_0,
        Key_1,
        Key_2,
        Key_3,
        Key_4,
        Key_5,
        Key_6,
        Key_7,
        Key_8,
        Key_9,
        Key_A,
        Key_B,
        Key_C,
        Key_D,
        Key_E,
        Key_F,
        Key_G,
        Key_H,
        Key_I,
        Key_J,
        Key_K,
        Key_L,
        Key_M,
        Key_N,
        Key_O,
        Key_P,
        Key_Q,
        Key_R,
        Key_S,
        Key_T,
        Key_U,
        Key_V,
        Key_W,
        Key_X,
        Key_Y,
        Key_Z,
        Key_Escape,
        Key_Tab,
        Key_Backspace,
        Key_Return,
        Key_Delete,
        Key_Left,
        Key_Up,
        Key_Right,
        Key_Down,
        Key_Shift,
        Key_Control,
        Key_Meta,
        Key_Alt
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum representing keyboard modifier keys.
    */
    enum KeyboardModifier {
        /**
        * No modifier key pressed.
        */
        NoModifier,
        /**
        * Shift key modifier.
        */
        ShiftModifier,
        /**
        * Control key modifier.
        */
        ControlModifier,
        /**
        * Alt key modifier.
        */
        AltModifier,
        /**
        * Meta/Command key modifier.
        */
        MetaModifier,
        /**
        * Keypad key modifier.
        */
        KeypadModifier,
        /**
        * Group switch key modifier.
        */
        GroupSwitchModifier
    }

}

declare module "LensStudio:Ui" {
    class KeyEvent extends Event {
        
        /** @hidden */
        protected constructor()
        
        /**
        * @readonly
        */
        key: Key
        
        /**
        * @readonly
        */
        modifiers: KeyboardModifier
        
        /**
        * @readonly
        */
        text: string
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget displaying read-only text.
    */
    class Label extends Widget {
        /**
        * Construct a label widget for displaying text in a UI panel.
        */
        constructor(parent: Widget)
        
        /**
        * Signal emitted when a link in the label text is activated.
        
        * @readonly
        */
        onLinkActivate: signal1<string, void>
        
        /**
        * Enable or disable opening external links when clicked.
        */
        openExternalLinks: boolean
        
        /**
        * The text content displayed by the label.
        */
        text: string
        
        /**
        * Enable or disable automatic text wrapping.
        */
        wordWrap: boolean
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Base class for layout managers.
    */
    class Layout extends ScriptObject {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Add a widget to the layout.
        */
        addWidget(widget: Widget): void
        
        /**
        * Remove all widgets from the layout with specified cleanup behavior.
        */
        clear(behavior: ClearLayoutBehavior): void
        
        /**
        * Schedule layout for deletion after event processing.
        */
        deleteLater(): void
        
        /**
        * Set the margins around layout contents.
        */
        setContentsMargins(left: number, top: number, right: number, bottom: number): void
        
        /**
        * Set alignment for a nested layout within this layout.
        */
        setLayoutAlignment(layout: Layout, alignment: Alignment): boolean
        
        /**
        * Set alignment for a widget within this layout.
        */
        setWidgetAlignment(widget: Widget, alignment: Alignment): boolean
        
        /**
        * Whether the layout is active and responsive to user input.
        */
        enabled: boolean
        
        /**
        * Whether this object references a valid layout.
        
        * @readonly
        */
        isNull: boolean
        
        /**
        * Distance between widgets in the layout.
        */
        spacing: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget for single-line text input.
    */
    class LineEdit extends Widget {
        /**
        * Initialize a single-line text input widget.
        */
        constructor(parent: Widget)
        
        /**
        * The current position of the text cursor.
        */
        cursorPosition: number
        
        /**
        * The icon displayed in the line edit.
        */
        icon: Editor.Icon
        
        /**
        * Signal emitted when editing is finished.
        
        * @readonly
        */
        onEditingFinished: signal0<void>
        
        /**
        * Signal emitted when the return key is pressed.
        
        * @readonly
        */
        onReturnPressed: signal0<void>
        
        /**
        * Signal emitted when the text changes.
        
        * @readonly
        */
        onTextChange: signal1<string, void>
        
        /**
        * Placeholder text shown when the input is empty.
        */
        placeholderText: string
        
        /**
        * Whether the line edit is read-only.
        */
        readonly: boolean
        
        /**
        * The current text content.
        */
        text: string
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget displaying a scrollable list of items.
    */
    class ListWidget extends Widget {
        /**
        * Constructs a ListWidget UI element for displaying list items.
        */
        constructor(parent: Widget)
        
        /**
        * Add a generic item to the list.
        */
        addItem(item: ListWidgetItem): void
        
        /**
        * Add a text item to the list.
        */
        addTextItem(text: string): void
        
        /**
        * Remove all items from the list.
        */
        clear(): void
        
        /**
        * Set the currently selected row by index.
        */
        setCurrentRow(row: number): void
        
        /**
        * Replace the widget displayed at a specific row.
        */
        setItemWidget(item: ListWidgetItem, widget: Widget): void
        
        /**
        * Index of the currently selected row.
        */
        currentRow: number
        
        /**
        * Signal emitted when the selected row changes.
        
        * @readonly
        */
        onCurrentRowChanged: signal1<number, void>
        
        /**
        * Signal emitted when a row is double-clicked.
        
        * @readonly
        */
        onRowDoubleClicked: signal1<number, void>
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Individual item in a ListWidget.
    */
    class ListWidgetItem extends ScriptObject {
        /**
        * Construct a list widget item for use in ListWidget containers.
        */
        constructor(parent: ListWidget)
        
        /**
        * Sets the icon displayed for this list item.
        */
        setIcon(icon: Editor.Icon): void
        
        /**
        * Whether the list item is hidden from display.
        */
        hidden: boolean
        
        /**
        * Whether the list item is currently selected.
        */
        selected: boolean
        
        /**
        * Suggested dimensions for rendering the list item.
        */
        sizeHint: Size
        
        /**
        * The text label displayed for the list item.
        */
        text: string
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Popup menu widget.
    */
    class Menu extends AbstractMenu {
        /**
        * Create a Menu instance for building menu hierarchies.
        */
        constructor(parent: Widget)
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Dialog for displaying messages or confirmations.
    */
    class MessageBox {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Display a critical error message dialog and return the button clicked by the user.
        */
        static critical(title: string, text: string, buttons: MessageBox.StandardButtons, defaultButton: MessageBox.StandardButton): MessageBox.StandardButton
        
        /**
        * Display an information message dialog and return the button clicked by the user.
        */
        static information(title: string, text: string, buttons: MessageBox.StandardButtons, defaultButton: MessageBox.StandardButton): MessageBox.StandardButton
        
        /**
        * Display a question dialog and return the button clicked by the user.
        */
        static question(title: string, text: string, buttons: MessageBox.StandardButtons, defaultButton: MessageBox.StandardButton): MessageBox.StandardButton
        
        /**
        * Display a warning message dialog and return the button clicked by the user.
        */
        static warning(title: string, text: string, buttons: MessageBox.StandardButtons, defaultButton: MessageBox.StandardButton): MessageBox.StandardButton
        
    }

}

declare module "LensStudio:Ui" {
    namespace MessageBox {
        /**
        * Icon enumeration for message box dialogs.
        */
        enum Icon {
            /**
            * No icon displayed.
            */
            NoIcon,
            /**
            * Information icon.
            */
            Information,
            /**
            * Warning icon.
            */
            Warning,
            /**
            * Critical/error icon.
            */
            Critical,
            /**
            * Question icon.
            */
            Question
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace MessageBox {
        /**
        * Button option type that can be clicked in a message dialog.
        */
        enum StandardButton {
            /**
            * No button.
            */
            NoButton,
            /**
            * OK button.
            */
            Ok,
            /**
            * Save button.
            */
            Save,
            /**
            * Save all button.
            */
            SaveAll,
            /**
            * Open button.
            */
            Open,
            /**
            * Yes button.
            */
            Yes,
            /**
            * Yes to all button.
            */
            YesToAll,
            /**
            * No button.
            */
            No,
            /**
            * No to all button.
            */
            NoToAll,
            /**
            * Abort button.
            */
            Abort,
            /**
            * Retry button.
            */
            Retry,
            /**
            * Ignore button.
            */
            Ignore,
            /**
            * Close button.
            */
            Close,
            /**
            * Cancel button.
            */
            Cancel,
            /**
            * Discard button.
            */
            Discard,
            /**
            * Help button.
            */
            Help,
            /**
            * Apply button.
            */
            Apply,
            /**
            * Reset button.
            */
            Reset,
            /**
            * Restore defaults button.
            */
            RestoreDefaults
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace MessageBox {
        /**
        * Collection of button options to display in the message dialog.
        
        * @beta
        */
        class StandardButtons {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum representing mouse button identifiers.
    */
    enum MouseButton {
        /**
        * NEW
        */
        NoButton,
        /**
        * NEW
        */
        LeftButton,
        /**
        * NEW
        */
        RightButton,
        /**
        * NEW
        */
        MiddleButton,
        /**
        * NEW
        */
        BackButton,
        /**
        * NEW
        */
        ForwardButton
    }

}

declare module "LensStudio:Ui" {
    /**
    * Event object containing mouse interaction data.
    */
    class MouseEvent extends Event {
        
        /** @hidden */
        protected constructor()
        
        /**
        * NEW
        
        * @readonly
        */
        button: MouseButton
        
        /**
        * NEW
        
        * @readonly
        */
        buttons: MouseButton
        
        /**
        * NEW
        
        * @readonly
        */
        globalX: number
        
        /**
        * NEW
        
        * @readonly
        */
        globalY: number
        
        /**
        * NEW
        
        * @readonly
        */
        modifiers: KeyboardModifier
        
        /**
        * NEW
        
        * @readonly
        */
        x: number
        
        /**
        * NEW
        
        * @readonly
        */
        y: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Represents an animated movie or video file.
    */
    class Movie extends ScriptObject {
        /**
        * Constructs a new Movie UI element within the LensStudio:Ui namespace.
        */
        constructor(filename: Editor.Path)
        
        jumpToFrame(frame: number): boolean
        
        /**
        * Resizes the movie to the specified width and height
        */
        resize(width: number, height: number): void
        
        cacheMode: Movie.CacheMode
        
        /**
        * @readonly
        */
        frameCount: number
        
        /**
        * The width of the movie in pixels
        */
        height: number
        
        /**
        * The height of the movie in pixels
        */
        speed: number
        
        /**
        * The playback speed of the movie
        */
        width: number
        
    }

}

declare module "LensStudio:Ui" {
    namespace Movie {
        enum CacheMode {
            CacheNone,
            CacheAll
        }
    
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget for playing movies or animations.
    */
    class MovieView extends Widget {
        /**
        * Constructs a new MovieView widget for embedding video playback within a plugin panel.
        */
        constructor(parent: Widget)
        
        /**
        * Whether the movie plays back automatically.
        */
        animated: boolean
        
        /**
        * The Movie asset displayed by this widget.
        */
        movie: Movie
        
        /**
        * Signal emitted when the widget is clicked.
        
        * @readonly
        */
        onClick: signal0<void>
        
        /**
        * Signal emitted when the hover state changes, passing true when hovered.
        
        * @readonly
        */
        onHover: signal1<boolean, void>
        
        /**
        * Whether the widget responds to hover events.
        */
        responseHover: boolean
        
        /**
        * Whether the movie content is scaled to fill the widget bounds.
        */
        scaledContents: boolean
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying horizontal or vertical orientation.
    */
    enum Orientation {
        /**
        * Horizontal orientation, laying out elements along the X axis.
        */
        Horizontal,
        /**
        * Vertical orientation, laying out elements along the Y axis.
        */
        Vertical
    }

}

declare module "LensStudio:Ui" {
    /**
    * Toolbar that collapses into a menu when space is limited.
    */
    class OverflowToolBar extends Widget {
        /**
        * Constructs an OverflowToolBar widget that collapses toolbar items into an overflow menu when space is insufficient.
        */
        constructor(parent: Widget)
        
        /**
        * Adds a stretch spacer to the specified section with the given stretch factor.
        */
        addStretch(section: Section, stretch: number): void
        
        /**
        * Adds a widget to the specified section, optionally associating it with an action.
        */
        addWidget(widget: Widget, section: Section, action?: Action): void
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Represents an image in memory.
    */
    class Pixmap extends ScriptObject {
        /**
        * Constructs a new Pixmap instance for use in UI widgets.
        */
        constructor(filename: Editor.Path)
        
        /**
        * Crops the pixmap to the specified rectangle.
        */
        crop(rect: Rect): void
        
        /**
        * Loads an image from the given file path.
        */
        load(filename: Editor.Path): void
        
        /**
        * Resizes the pixmap to the specified width and height.
        */
        resize(width: number, height: number): void
        
        /**
        * Saves the pixmap to the given file path, with optional quality setting.
        */
        save(filename: Editor.Path, quality?: number): void
        
        /**
        * Controls how the aspect ratio is preserved during resize operations.
        */
        aspectRatioMode: AspectRatioMode
        
        /**
        * Height of the pixmap in pixels.
        */
        height: number
        
        /**
        * Controls the transformation quality mode used when scaling the pixmap.
        */
        transformationMode: TransformationMode
        
        /**
        * Width of the pixmap in pixels.
        */
        width: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Popup widget with an arrow pointing to a reference position.
    */
    class PopupWithArrow extends Widget {
        /**
        * Constructs a popup widget with a directional arrow indicator for contextual UI overlays.
        */
        constructor(parent: Widget, arrowPosition: ArrowPosition)
        
        /** @internal */
        static create(widget: PopupWithArrow): PopupWithArrow
        
        /**
        * Closes the popup.
        */
        close(): void
        
        /**
        * Shows the popup anchored to the given target widget.
        */
        popup(target: Widget): void
        
        /**
        * Sets the main content widget displayed inside the popup.
        */
        setMainWidget(widget: Widget): void
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget displaying a progress bar.
    */
    class ProgressBar extends Widget {
        /**
        * Constructs a new ProgressBar widget.
        */
        constructor(parent: Widget)
        
        /**
        * Sets the primary fill color of the progress bar.
        */
        setPrimaryColor(color: Color): void
        
        /**
        * Sets the minimum and maximum bounds of the progress bar.
        */
        setRange(minimum: number, maximum: number): void
        
        /**
        * Sets the secondary color of the progress bar, typically used for the background track.
        */
        setSecondaryColor(color: Color): void
        
        /**
        * Upper bound of the progress bar range.
        */
        maximum: number
        
        /**
        * Lower bound of the progress bar range.
        */
        minimum: number
        
        /**
        * Current progress value within the minimummaximum range.
        */
        value: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget showing progress without a specific percentage.
    */
    class ProgressIndicator extends Widget {
        /**
        * Constructs a new ProgressIndicator widget for displaying indeterminate or determinate progress feedback in a plugin panel.
        */
        constructor(parent: Widget)
        
        /**
        * Starts displaying the progress animation.
        */
        start(): void
        
        /**
        * Stops and hides the progress animation.
        */
        stop(): void
        
    }

}

declare module "LensStudio:Ui" {
    namespace ProjectSettings {
        /**
        * Represents a project settings validation error with a human-readable description.
        */
        class Error {
            /**
            * Constructs a project settings error with the given description string.
            */
            constructor(description: string)
            
            /**
            * Human-readable message describing the project settings error.
            */
            description: string
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace ProjectSettings {
        /**
        * Represents a project settings validation result with no issues.
        */
        class NoIssue {
            /**
            * Constructs a NoIssue result indicating no project settings validation issues were found.
            */
            constructor()
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace ProjectSettings {
        /**
        * Represents a project settings validation warning with a human-readable description.
        */
        class Warning {
            /**
            * Constructs a Warning project settings validation result with the given description.
            */
            constructor(description: string)
            
            /**
            * The warning message text.
            */
            description: string
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    /**
    * Clickable button widget.
    */
    class PushButton extends AbstractButton {
        /**
        * Constructs a new PushButton widget with the given parent widget.
        */
        constructor(parent: Widget)
        
        /**
        * Sets the icon display mode for the button.
        */
        setIconMode(iconMode: IconMode): void
        
        /**
        * Sets the button icon and its display mode simultaneously.
        */
        setIconWithMode(icon: Editor.Icon, iconMode: IconMode): void
        
        /**
        * Signal emitted when the button is clicked.
        
        * @readonly
        */
        onClick: signal0<void>
        
        /**
        * Whether the button is styled as a primary action button.
        */
        primary: boolean
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget for selecting one option from a group.
    */
    class RadioButton extends AbstractButton {
        /**
        * Constructs a new RadioButton widget instance.
        */
        constructor(parent: Widget)
        
        /**
        * Signal emitted when the radio button is clicked.
        
        * @readonly
        */
        onClick: signal0<void>
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Manager for radio button groups.
    */
    class RadioButtonGroup extends Widget {
        /**
        * Constructs a new RadioButtonGroup widget for grouping mutually exclusive radio button options.
        */
        constructor(parent: Widget)
        
        /**
        * Adds a button to the group with the given numeric id.
        */
        addButton(button: AbstractButton, id: number): void
        
        /**
        * Deselects all buttons in the group.
        */
        clearSelection(): void
        
        /**
        * Index of the currently selected button.
        */
        currentIndex: number
        
        /**
        * Currently selected button widget.
        
        * @readonly
        */
        currentItem: AbstractButton
        
        /**
        * Pixel spacing between buttons in the group.
        */
        spacing: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Represents a rectangular area with x, y, width, height.
    */
    class Rect {
        /**
        * Constructs a new Rect instance representing a rectangular region in UI space.
        */
        constructor(x: number, y: number, width: number, height: number)
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Menu with search/filter functionality.
    */
    class SearchableMenu extends AbstractMenu {
        /**
        * Constructs a new SearchableMenu widget with a built-in search field for filtering menu items.
        */
        constructor(parent: Widget)
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * LineEdit with search capabilities.
    */
    class SearchLineEdit extends LineEdit {
        /**
        * Constructs a SearchLineEdit widget for use in plugin UI panels.
        */
        constructor(parent: Widget)
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Collapsible section widget for grouping content.
    */
    enum Section {
        /**
        * Left section of the layout area.
        */
        Left,
        /**
        * Center section of the layout area.
        */
        Center,
        /**
        * Right section of the layout area.
        */
        Right
    }

}

declare module "LensStudio:Ui" {
    /**
    * A horizontal or vertical line widget used to visually separate groups of UI elements.
    */
    class Separator extends Widget {
        /**
        * Constructs a horizontal or vertical separator widget for visually dividing UI sections.
        */
        constructor(orientation: Orientation, shadow: Shadow, parent: Widget)
        
        /** @internal */
        static create(widget: Separator): Separator
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying shadow effect style.
    */
    enum Shadow {
        /**
        * Flat shadow with no depth effect.
        */
        Plain,
        /**
        * Shadow style that makes an element appear raised above the surface.
        */
        Raised,
        /**
        * Shadow style that makes an element appear recessed into the surface.
        */
        Sunken
    }

}

declare module "LensStudio:Ui" {
    class Shortcut extends ScriptObject {
        constructor(parent: Widget, keySequence: string, context: ShortcutContext)
        
        /**
        * @readonly
        */
        onActivated: signal0<void>
        
        /**
        * @readonly
        */
        onActivatedAmbiguously: signal0<void>
        
    }

}

declare module "LensStudio:Ui" {
    enum ShortcutContext {
        WidgetShortcut,
        WindowShortcut,
        ApplicationShortcut,
        WidgetWithChildrenShortcut
    }

}

declare module "LensStudio:Ui" {
    /**
    * Represents width and height dimensions.
    */
    class Size {
        /**
        * Constructs a new Size object representing a two-dimensional size value with width and height.
        */
        constructor(width: number, height: number)
        
        /**
        * Height component of the size.
        */
        height: number
        
        /**
        * Width component of the size.
        */
        width: number
        
    }

}

declare module "LensStudio:Ui" {
    namespace SizePolicy {
        /**
        * Enum defining how a widget resizes along an axis: Fixed, Minimum, MinimumExpanding, Maximum, Preferred, Expanding, or Ignored.
        */
        enum Policy {
            /**
            * Widget size is fixed and will not grow or shrink.
            */
            Fixed,
            /**
            * Widget can grow but prefers its minimum size hint.
            */
            Minimum,
            /**
            * Widget can grow and will expand if extra space is available, but prefers its minimum size hint.
            */
            MinimumExpanding,
            /**
            * Widget can shrink but prefers its size hint as maximum.
            */
            Maximum,
            /**
            * Widget uses its size hint as preferred size and can grow or shrink.
            */
            Preferred,
            /**
            * Widget actively takes as much space as available.
            */
            Expanding,
            /**
            * Widget size hint is ignored and it takes all available space.
            */
            Ignored
        }
    
    }

}

declare module "LensStudio:Ui" {
    /**
    * Collection of size values.
    */
    class Sizes {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Side dimension for button delegate elements.
        */
        static ButtonDelegateSide: number
        
        /**
        * Standard height for button widgets.
        */
        static ButtonHeight: number
        
        /**
        * Corner radius applied to buttons.
        */
        static ButtonRadius: number
        
        /**
        * Diameter of the drawn checkbox indicator.
        */
        static CheckBoxDrawedDiameter: number
        
        /**
        * Width of the checkbox outline stroke.
        */
        static CheckBoxOutlineWidth: number
        
        /**
        * Padding added around a checkbox when focused.
        */
        static CheckboxFocusPadding: number
        
        /**
        * Internal padding within a checkbox.
        */
        static CheckboxPadding: number
        
        /**
        * Corner radius of the checkbox shape.
        */
        static CheckboxRadius: number
        
        /**
        * Margin around content inside a dialog.
        */
        static DialogContentMargin: number
        
        /**
        * Padding value equal to twice the standard padding.
        */
        static DoublePadding: number
        
        /**
        * Height of the drag handle icon.
        */
        static DragIconSizeHeight: number
        
        /**
        * Width of the drag handle icon.
        */
        static DragIconSizeWidth: number
        
        /**
        * Side dimension of extent/expand icons.
        */
        static ExtentIconSide: number
        
        /**
        * Padding value equal to half the standard padding.
        */
        static HalfPadding: number
        
        /**
        * Standard side dimension for icons.
        */
        static IconSide: number
        
        /**
        * Standard height for input field widgets.
        */
        static InputHeight: number
        
        /**
        * Corner radius applied to input fields.
        */
        static InputRadius: number
        
        /**
        * Height of individual menu items.
        */
        static MenuItemHeight: number
        
        /**
        * Side dimension of the icon shown in message boxes.
        */
        static MessageBoxIconSide: number
        
        /**
        * Standard padding value used throughout the UI.
        */
        static Padding: number
        
        /**
        * Larger padding value for wider spacing needs.
        */
        static PaddingLarge: number
        
        /**
        * Height of progress bar widgets.
        */
        static ProgressBarHeight: number
        
        /**
        * Corner radius applied to rounded pixmap images.
        */
        static RoundedPixmapRadius: number
        
        /**
        * Margin around content adjacent to separators.
        */
        static SeparatorContentsMargin: number
        
        /**
        * Width of separator line elements.
        */
        static SeparatorLineWidth: number
        
        /**
        * Height of the window size grip widget.
        */
        static SizeGripSizeHeight: number
        
        /**
        * Width of the window size grip widget.
        */
        static SizeGripSizeWidth: number
        
        /**
        * Standard spacing between UI elements.
        */
        static Spacing: number
        
        /**
        * Height of increment/decrement buttons in a spinbox.
        */
        static SpinboxButtonHeight: number
        
        /**
        * Width of increment/decrement buttons in a spinbox.
        */
        static SpinboxButtonWidth: number
        
        /**
        * Default width of a spinbox widget.
        */
        static SpinboxDefaultWidth: number
        
        /**
        * Width of the splitter handle divider.
        */
        static SplitterHandleWidth: number
        
        /**
        * Height of text edit widgets.
        */
        static TextEditHeight: number
        
        /**
        * Internal padding within tool button widgets.
        */
        static ToolButtonPadding: number
        
        /**
        * Width of the gradient used for text eliding in views.
        */
        static ViewElidingGradientWidth: number
        
        /**
        * Indentation width for items in tree or list views.
        */
        static ViewIndentation: number
        
        /**
        * Height of section headers in views.
        */
        static ViewSectionHeight: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget for selecting a value within a range.
    */
    class Slider extends Widget {
        /**
        * Constructs a new Slider widget for selecting a numeric value within a range.
        */
        constructor(parent: Widget)
        
        /**
        * Sets the minimum and maximum values of the slider.
        */
        setRange(min: number, max: number): void
        
        /**
        * Signal emitted when the slider value changes, providing the new value.
        
        * @readonly
        */
        onValueChange: signal1<number, void>
        
        /**
        * The step size used when the slider is moved by a single increment.
        */
        singleStep: number
        
        /**
        * The current numeric value of the slider.
        */
        value: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget for entering integer numbers.
    */
    class SpinBox extends Widget {
        /**
        * Constructs a new SpinBox widget for numeric input with configurable range and step values.
        */
        constructor(parent: Widget)
        
        /**
        * Sets the minimum and maximum allowed values for the spin box.
        */
        setRange(min: number, max: number): void
        
        /**
        * Signal emitted when the spin box value changes, passing the new numeric value.
        
        * @readonly
        */
        onValueChange: signal1<number, void>
        
        /**
        * The increment amount applied when stepping the spin box up or down.
        */
        step: number
        
        /**
        * The current numeric value of the spin box.
        */
        value: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget dividing a container into resizable sections.
    */
    class Splitter extends Widget {
        /**
        * Constructs a new Splitter widget for dividing a layout area into resizable panes.
        */
        constructor(parent: Widget)
        
        /**
        * Appends a widget to the splitter.
        */
        addWidget(widget: Widget): void
        
        /**
        * Inserts a widget at the given index position.
        */
        insertWidget(index: number, widget: Widget): void
        
        /**
        * Sets whether the child widget at the given index can be collapsed to zero size.
        */
        setCollapsible(index: number, collapsible: boolean): void
        
        /**
        * Whether child widgets can be collapsed to zero size by the user.
        */
        childrenCollapsible: boolean
        
        /**
        * Number of child widgets in the splitter.
        
        * @readonly
        */
        count: number
        
        /**
        * Width of the divider handle between child widgets, in pixels.
        */
        handleWidth: number
        
        /**
        * Signal emitted when the splitter handle is moved.
        
        * @readonly
        */
        onSplitterMove: signal2<number, number, void>
        
        /**
        * Layout direction of the splitter, either horizontal or vertical.
        */
        orientation: Orientation
        
        /**
        * List of sizes of the child widgets in pixels.
        */
        sizes: number[]
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Layout manager displaying one widget at a time.
    */
    class StackedLayout extends Layout {
        /**
        * Constructs a new StackedLayout instance for stacking widgets on top of each other.
        */
        constructor()
        
        /**
        * Inserts a widget at the specified index and returns its position in the stack.
        */
        addWidgetAt(widget: Widget, index: number): number
        
        /**
        * Index of the currently visible widget in the stack.
        */
        currentIndex: number
        
        /**
        * Signal fired when the visible widget index changes, passing the new index.
        
        * @readonly
        */
        onCurrentChanged: signal1<number, void>
        
        /**
        * Controls how widgets are stacked and which one is visible.
        */
        stackingMode: StackingMode
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Container displaying one child widget at a time.
    */
    class StackedWidget extends Widget {
        /**
        * Constructs a new StackedWidget container that displays one child widget at a time.
        */
        constructor(parent: Widget)
        
        /**
        * Adds a widget to the stack and returns its index.
        */
        addWidget(widget: Widget): number
        
        /**
        * Index of the currently visible widget.
        */
        currentIndex: number
        
        /**
        * Reference to the currently visible widget.
        */
        currentWidget: Widget
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying stacking order mode.
    */
    enum StackingMode {
        /**
        * Stacks only one widget at a time, hiding others.
        */
        StackOne,
        /**
        * Stacks all widgets simultaneously.
        */
        StackAll
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget showing status with color or icon.
    */
    class StatusIndicator extends Widget {
        /**
        * Constructs a new StatusIndicator widget instance.
        */
        constructor(text: string, parent: Widget)
        
        /** @internal */
        static create(widget: StatusIndicator): StatusIndicator
        
        /**
        * Starts the spinning animation of the status indicator.
        */
        start(): void
        
        /**
        * Stops the spinning animation of the status indicator.
        */
        stop(): void
        
        /**
        * The label text displayed alongside the status indicator.
        */
        text: string
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget displaying tabs for switching between panels.
    */
    class TabBar extends Widget {
        /**
        * Constructs a new TabBar widget for organizing content into selectable tabs.
        */
        constructor(parent: Widget)
        
        /**
        * Adds a new tab with the given text label.
        */
        addTab(text: string): void
        
        /**
        * Sets the icon for the tab at the specified index.
        */
        setTabIcon(index: number, icon: Editor.Icon): void
        
        /**
        * Index of the currently selected tab.
        */
        currentIndex: number
        
        /**
        * Signal emitted when the selected tab index changes.
        
        * @readonly
        */
        onCurrentChange: signal1<number, void>
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Represents cursor position in text.
    */
    class TextCursor {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Moves the cursor using the given operation and mode, returns true if the position changed.
        */
        movePosition(operation: TextCursor.MoveOperation, mode: TextCursor.MoveMode): boolean
        
    }

}

declare module "LensStudio:Ui" {
    namespace TextCursor {
        /**
        * Enum controlling whether moving the cursor moves the anchor or keeps it to extend the selection.
        */
        enum MoveMode {
            /**
            * Moves both the cursor and the anchor to the new position, collapsing any selection.
            */
            MoveAnchor,
            /**
            * Moves only the cursor while keeping the anchor fixed, extending or creating a selection.
            */
            KeepAnchor
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace TextCursor {
        /**
        * Enum of cursor movement operations such as Start, End, NextWord, StartOfLine, and others.
        */
        enum MoveOperation {
            /**
            * Cursor does not move.
            */
            NoMove,
            /**
            * Moves cursor to the start of the document.
            */
            Start,
            /**
            * Moves cursor up one line.
            */
            Up,
            /**
            * Moves cursor to the start of the current line.
            */
            StartOfLine,
            /**
            * Moves cursor to the start of the current block.
            */
            StartOfBlock,
            /**
            * Moves cursor to the start of the current word.
            */
            StartOfWord,
            /**
            * Moves cursor to the start of the previous block.
            */
            PreviousBlock,
            /**
            * Moves cursor one character backward.
            */
            PreviousCharacter,
            /**
            * Moves cursor to the start of the previous word.
            */
            PreviousWord,
            /**
            * Moves cursor one character to the left.
            */
            Left,
            /**
            * Moves cursor one word to the left.
            */
            WordLeft,
            /**
            * Moves cursor to the end of the document.
            */
            End,
            /**
            * Moves cursor down one line.
            */
            Down,
            /**
            * Moves cursor to the end of the current line.
            */
            EndOfLine,
            /**
            * Moves cursor to the end of the current block.
            */
            EndOfBlock,
            /**
            * Moves cursor to the start of the next block.
            */
            NextBlock,
            /**
            * Moves cursor one character forward.
            */
            NextCharacter,
            /**
            * Moves cursor to the start of the next word.
            */
            NextWord,
            /**
            * Moves cursor one character to the right.
            */
            Right,
            /**
            * Moves cursor one word to the right.
            */
            WordRight,
            /**
            * Moves cursor to the next table cell.
            */
            NextCell,
            /**
            * Moves cursor to the previous table cell.
            */
            PreviousCell,
            /**
            * Moves cursor to the first cell of the next table row.
            */
            NextRow,
            /**
            * Moves cursor to the first cell of the previous table row.
            */
            PreviousRow
        }
    
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget for multi-line text input.
    
    * @example
    * // Create a TextEdit widget const textEdit = new Ui.TextEdit(widget); textEdit.placeholderText = 'Enter text here...'; textEdit.setFixedHeight(Ui.Sizes.TextEditHeight);  // Connect to text change signal textEdit.onTextChange.connect(function() {     if (textEdit.plainText.length > 6) {         // Limit text to 10 characters         textEdit.blockSignals(true);         const text = textEdit.plainText.substring(0, 10);         textEdit.plainText = text;                  // Move cursor to end         const cursor = textEdit.textCursor;         cursor.movePosition(Ui.TextCursor.MoveOperation.End, Ui.TextCursor.MoveMode.MoveAnchor);         textEdit.textCursor = cursor;                  textEdit.blockSignals(false);     } });  // Set readonly mode textEdit.readOnly = false;  // Enable rich text if needed textEdit.acceptRichText = true;
    */
    class TextEdit extends Widget {
        /**
        * Constructs a new TextEdit widget for multi-line text input.
        */
        constructor(parent: Widget)
        
        /**
        * Controls whether rich text formatting is accepted (true = formatted, false = plain text only).
        */
        acceptRichText: boolean
        
        /**
        * Signal emitted whenever the text content changes.
        
        * @readonly
        */
        onTextChange: signal0<void>
        
        /**
        * String displayed when TextEdit is empty, shown in dimmed text as a hint to the user.
        */
        placeholderText: string
        
        /**
        * When set, replaces entire content with plain text.
        */
        plainText: string
        
        /**
        * Controlling edit permissions (true = read-only, false = editable).
        */
        readOnly: boolean
        
        /**
        * Object reppresenting cursor position and selection, used to move cursor or select text.
        */
        textCursor: TextCursor
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Configuration for toolbar appearance and behavior.
    */
    class ToolbarConfig {
        /**
        * Constructs a new ToolbarConfig instance for configuring a plugin's toolbar button appearance and behavior.
        */
        constructor()
        
        /**
        * Text label displayed on the toolbar.
        */
        caption: string
        
        /**
        * Icon displayed on the toolbar.
        */
        icon: Editor.Icon
        
        /**
        * Toolbar behavior and layout settings.
        */
        settings: ToolbarSettings
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying toolbar position.
    */
    enum ToolbarPosition {
        /**
        * Docks the toolbar to the right side.
        */
        Right,
        /**
        * Docks the toolbar to the left side.
        */
        Left
    }

}

declare module "LensStudio:Ui" {
    /**
    * Settings for toolbar configuration.
    */
    class ToolbarSettings {
        /**
        * Constructs a new ToolbarSettings configuration object for use in a plugin descriptor's toolbar configuration.
        */
        constructor()
        
        /**
        * Position of the toolbar within the editor layout, as a ToolbarPosition value.
        */
        position: ToolbarPosition
        
        /**
        * Whether this toolbar is designated as the primary toolbar.
        */
        primary: boolean
        
        /**
        * Numeric priority used to determine toolbar ordering when multiple toolbars share the same position.
        */
        priority: number
        
        /**
        * Whether text labels are shown alongside toolbar icons.
        */
        showText: boolean
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Button suitable for toolbar placement.
    */
    class ToolButton extends AbstractButton {
        /**
        * Constructs a new ToolButton widget.
        */
        constructor(parent: Widget)
        
        /**
        * Sets the default action associated with the button.
        */
        setDefaultAction(action: Action): void
        
        /**
        * Signal emitted when the button is clicked.
        
        * @readonly
        */
        onClick: signal0<void>
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Enum specifying image transformation mode.
    */
    enum TransformationMode {
        /**
        * Applies a fast, lower-quality transformation without anti-aliasing.
        */
        FastTransformation,
        /**
        * Applies a smooth, higher-quality transformation with anti-aliasing.
        */
        SmoothTransformation
    }

}

declare module "LensStudio:Ui" {
    /**
    * Container with vertical scrolling.
    */
    class VerticalScrollArea extends Widget {
        /**
        * Constructs a new vertical scroll area widget.
        */
        constructor(parent: Widget)
        
        /**
        * Sets the child widget to be displayed inside the scroll area.
        */
        setWidget(widget: Widget): void
        
        /**
        * The maximum scroll position value.
        
        * @readonly
        */
        maximum: number
        
        /**
        * The minimum scroll position value.
        
        * @readonly
        */
        minimum: number
        
        /**
        * Signal emitted when the scroll position value changes.
        
        * @readonly
        */
        onValueChange: signal1<number, void>
        
        /**
        * The current scroll position within the scroll area.
        */
        value: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Widget for displaying video content.
    */
    class VideoView extends Widget {
        /**
        * Constructs a new VideoView widget for embedding video playback inside a plugin panel.
        */
        constructor(parent: Widget)
        
        /**
        * Pauses the currently playing video.
        */
        pause(): void
        
        /**
        * Starts or resumes video playback.
        */
        play(): void
        
        /**
        * Sets the video file to play from the given path.
        */
        setSource(path: Editor.Path): void
        
        /**
        * Stops video playback and resets to the beginning.
        */
        stop(): void
        
        /**
        * Total duration of the loaded video in seconds.
        
        * @readonly
        */
        duration: number
        
        /**
        * Number of times the video will loop; -1 for infinite looping.
        */
        loopCount: number
        
        /**
        * Whether the video audio is muted.
        */
        muted: boolean
        
        /**
        * Callback fired when the video view is clicked.
        
        * @readonly
        */
        onClick: signal0<void>
        
        /**
        * Callback fired when the pointer enters or leaves the video view.
        
        * @readonly
        */
        onHover: signal1<boolean, void>
        
        /**
        * Callback fired when the playback position changes.
        
        * @readonly
        */
        onPositionChanged: signal1<number, void>
        
        /**
        * Callback fired when the playback state changes.
        
        * @readonly
        */
        onStateChanged: signal1<any, void>
        
        /**
        * Current playback position in seconds.
        */
        position: number
        
        /**
        * Corner radius of the video view widget.
        */
        radius: number
        
        /**
        * Whether the widget responds to hover events.
        */
        responseHover: boolean
        
        /**
        * Current playback state of the video.
        
        * @readonly
        */
        state: any
        
        /**
        * Playback volume level, from 0.0 to 1.0.
        */
        volume: number
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Embedded Chromium browser widget for HTML/CSS/JavaScript UI.
    */
    class WebEngineView extends Widget {
        /**
        * Constructs an embedded Chromium browser widget for rendering HTML/CSS/JavaScript UI inside a plugin panel.
        */
        constructor(parent: Widget)
        
        /**
        * Navigates the web view to the specified URL.
        */
        load(url: string): void
        
        /**
        * Signal emitted when a page load completes, with a boolean indicating success.
        
        * @readonly
        */
        onLoadFinished: signal1<boolean, void>
        
        /**
        * Signal emitted when a page load begins.
        
        * @readonly
        */
        onLoadStarted: signal0<void>
        
    }

}

declare module "LensStudio:Ui" {
    /**
    * Base class for all UI widgets.
    */
    class Widget extends ScriptObject {
        /**
        * Constructs a new Widget with the given parent widget.
        */
        constructor(parent: Widget)
        
        /**
        * Brings the widget's top-level window to the foreground and gives it focus.
        */
        activateWindow(): void
        
        /**
        * Resizes the widget to fit its contents based on the size hint.
        */
        adjustSize(): void
        
        /**
        * Blocks or unblocks signal emission from the widget.
        */
        blockSignals(blocked: boolean): void
        
        /**
        * Closes the widget, hiding it and emitting the onClose signal.
        */
        close(): void
        
        /**
        * Schedules the widget for deletion after the current event loop iteration.
        */
        deleteLater(): void
        
        findChild(objectName: string): Widget
        
        getProperty(name: string): any
        
        /**
        * Captures the widget's current rendered content as a Pixmap.
        */
        grab(): Pixmap
        
        /**
        * Moves the widget to the specified position.
        */
        move(ax: number, ay: number): void
        
        /**
        * Raises the widget to the top of the parent widget's stack.
        */
        raise(): void
        
        /**
        * Resizes the widget to the specified width and height.
        */
        resize(width: number, height: number): void
        
        /**
        * Sets the margins around the widget's contents.
        */
        setContentsMargins(left: number, top: number, right: number, bottom: number): void
        
        /**
        * Sets the cursor shape displayed when the mouse is over the widget.
        */
        setCursor(shape: CursorShape): void
        
        /**
        * Sets a custom pixmap as the cursor when the mouse is over the widget.
        */
        setCursorPixmap(pixmap: Pixmap): void
        
        /**
        * Locks the widget's height to the given value, preventing resizing.
        */
        setFixedHeight(height: number): void
        
        /**
        * Locks the widget's width to the given value, preventing resizing.
        */
        setFixedWidth(width: number): void
        
        /**
        * Gives keyboard input focus to the widget.
        */
        setFocus(): void
        
        /**
        * Sets the maximum height the widget can be resized to.
        */
        setMaximumHeight(height: number): void
        
        /**
        * Sets the maximum width the widget can be resized to.
        */
        setMaximumWidth(width: number): void
        
        /**
        * Sets the minimum height the widget must maintain.
        */
        setMinimumHeight(height: number): void
        
        /**
        * Sets the minimum width the widget must maintain.
        */
        setMinimumWidth(width: number): void
        
        setProperty(name: string, value: any): boolean
        
        /**
        * Controls how the widget grows or shrinks relative to its layout.
        */
        setSizePolicy(horizontal: SizePolicy.Policy, vertical: SizePolicy.Policy): void
        
        /**
        * Marks property changes on this widget as undoable via the undo stack.
        */
        setUndoable(undoable: boolean): void
        
        /**
        * Marks property changes on this widget and all its children as undoable.
        */
        setUndoableRecursive(undoable: boolean): void
        
        /**
        * Makes the widget visible.
        */
        show(): void
        
        /**
        * Resets the cursor to the parent widget's cursor.
        */
        unsetCursor(): void
        
        /**
        * Whether the widget automatically fills its background before painting.
        */
        autoFillBackground: boolean
        
        /**
        * The color role used for the widget's background.
        */
        backgroundRole: ColorRole
        
        /**
        * @readonly
        */
        className: string
        
        /**
        * Controls how the widget handles context menu requests.
        */
        contextMenuPolicy: ContextMenuPolicy
        
        /**
        * The ratio between physical and logical pixels for the widget's display.
        
        * @readonly
        */
        devicePixelRatio: number
        
        /**
        * Whether the widget is interactive and accepts user input.
        */
        enabled: boolean
        
        /**
        * The font role applied to the widget's text rendering.
        */
        fontRole: FontRole
        
        /**
        * The color role used for the widget's foreground elements.
        */
        foregroundRole: ColorRole
        
        /**
        * @readonly
        */
        hasFocus: boolean
        
        /**
        * Current height of the widget in pixels.
        
        * @readonly
        */
        height: number
        
        /**
        * Whether the widget is hidden from view.
        */
        hidden: boolean
        
        /**
        * True if the underlying native widget object has been destroyed.
        
        * @readonly
        */
        isNull: boolean
        
        isTransparentForMouseEvents: boolean
        
        /**
        * The layout manager assigned to arrange child widgets.
        */
        layout: Layout
        
        objectName: string
        
        /**
        * Signal emitted when the widget is closed.
        
        * @readonly
        */
        onClose: signal1<import('LensStudio:Ui').CloseEvent, void>
        
        /**
        * @readonly
        */
        onFocusIn: signal0<void>
        
        /**
        * @readonly
        */
        onFocusOut: signal0<void>
        
        /**
        * Signal emitted when the widget becomes hidden.
        
        * @readonly
        */
        onHide: signal0<void>
        
        /**
        * Signal emitted when a key is pressed while the widget has focus.
        
        * @readonly
        */
        onKeyPress: signal1<number, void>
        
        /**
        * Signal emitted when the user double-clicks on the widget.
        
        * @readonly
        */
        onMouseDoubleClick: signal1<import('LensStudio:Ui').MouseEvent, void>
        
        /**
        * Signal emitted when the mouse moves over the widget.
        
        * @readonly
        */
        onMouseMove: signal1<import('LensStudio:Ui').MouseEvent, void>
        
        /**
        * Signal emitted when a mouse button is pressed on the widget.
        
        * @readonly
        */
        onMousePress: signal1<import('LensStudio:Ui').MouseEvent, void>
        
        /**
        * Signal emitted when a mouse button is released on the widget.
        
        * @readonly
        */
        onMouseRelease: signal1<import('LensStudio:Ui').MouseEvent, void>
        
        /**
        * Signal emitted when the widget is resized.
        
        * @readonly
        */
        onResize: signal2<number, number, void>
        
        /**
        * Signal emitted when the widget becomes visible.
        
        * @readonly
        */
        onShow: signal0<void>
        
        /**
        * Text displayed in a tooltip when the user hovers over the widget.
        */
        toolTip: string
        
        /**
        * Whether the widget is currently visible.
        */
        visible: boolean
        
        /**
        * Current width of the widget in pixels.
        
        * @readonly
        */
        width: number
        
        /**
        * Title text displayed in the widget's title bar when shown as a window.
        */
        windowTitle: string
        
    }

}

declare module "LensStudio:Ui" {
    namespace Workspaces {
        /**
        * Describes a workspace layout, holding its serialized layout data and associated metadata.
        
        * @beta
        */
        class Descriptor {
            /**
            * Constructs a new workspace descriptor holding layout and metadata configuration.
            
            * @beta
            */
            constructor()
            
            /**
            * Function that reads and returns the layout configuration for the workspace.
            
            * @beta
            */
            layoutReader: import('LensStudio:Serialization').IReader
            
            /**
            * Metadata associated with the workspace descriptor, such as display name and other identifying properties.
            
            * @beta
            */
            metadata: Workspaces.Metadata
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace Workspaces {
        /**
        * Holds display metadata for a workspace, including its name and icon.
        
        * @beta
        */
        class Metadata {
            /**
            * Constructs a new Metadata instance for a workspace, holding its display name and icon.
            
            * @beta
            */
            constructor()
            
            /**
            * Icon representing the workspace in the UI.
            
            * @beta
            */
            icon: Editor.Icon
            
            /**
            * Display name of the workspace.
            
            * @beta
            */
            name: string
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace Workspaces {
        /**
        * Handle referencing a predefined workspace preset.
        
        * @beta
        */
        class PresetHandle {
            
            /** @hidden */
            protected constructor()
            
        }
    
    }

}

declare module "LensStudio:Ui" {
    namespace Workspaces {
        /**
        * Represents an editor workspace, managing its layout and state.
        
        * @beta
        */
        class Workspace extends ScriptObject {
            
            /** @hidden */
            protected constructor()
            
            /**
            * The dock manager controlling panel layout within this workspace.
            
            * @readonly
            
            * @beta
            */
            dockManager: Editor.Dock.IDockManager
            
            /**
            * Metadata associated with this workspace.
            
            * @readonly
            
            * @beta
            */
            metadata: Workspaces.Metadata
            
        }
    
    }

}

/**
* @module LensStudio:UiTest
*/
declare module "LensStudio:UiTest" {
    export function KeyEvent(type: EventType, key: import('LensStudio:Ui').Key, modifiers: import('LensStudio:Ui').KeyboardModifier, text: string): import('LensStudio:Ui').KeyEvent
    
    export function MouseEvent(type: EventType, button: import('LensStudio:Ui').MouseButton, modifiers: import('LensStudio:Ui').KeyboardModifier, x: number, y: number): import('LensStudio:Ui').MouseEvent
    
    export function findChildren(widget: import('LensStudio:Ui').Widget, className: string): import('LensStudio:Ui').Widget[]
    
    export function invoke(widget: import('LensStudio:Ui').Widget, method: string): boolean
    
    export function itemClick(widget: import('LensStudio:Ui').Widget, path: number[]): void
    
    export function itemCollapse(widget: import('LensStudio:Ui').Widget, path: number[]): void
    
    export function itemCount(widget: import('LensStudio:Ui').Widget, path: number[]): number
    
    export function itemExpand(widget: import('LensStudio:Ui').Widget, path: number[]): void
    
    export function itemText(widget: import('LensStudio:Ui').Widget, path: number[]): string
    
    export function mainWindow(gui: import('LensStudio:Ui').IGui): import('LensStudio:Ui').Widget
    
    export function processEvents(ms: number): void
    
    export function sendEvent(widget: import('LensStudio:Ui').Widget, event: import('LensStudio:Ui').Event): void
    
}

declare module "LensStudio:UiTest" {
    enum EventType {
        MouseButtonPress,
        MouseButtonRelease,
        MouseButtonDblClick,
        MouseMove,
        KeyPress,
        KeyRelease
    }

}

/**
* Module providing URI handling plugin infrastructure for extending Lens Studio with custom URI scheme handlers.

* @module LensStudio:UriHandlerPlugin
*/
declare module "LensStudio:UriHandlerPlugin" {
}

declare module "LensStudio:UriHandlerPlugin" {
    /**
    * Descriptor for a URI handler plugin, including a predicate function to determine if the handler can process a given URI.
    */
    class Descriptor extends BaseDescriptor {
        /**
        * Constructs a new UriHandlerPlugin descriptor instance.
        */
        constructor()
        
        /**
        * Callback that determines whether this handler can instantiate the given asset.
        */
        canHandle: (arg1: string) => any
        
    }

}

declare module "LensStudio:UriHandlerPlugin" {
    /**
    * Constructs a URI handler plugin instance bound to the given plugin system and optional descriptor.
    */
    class UriHandlerPlugin extends Editor.IPlugin {
        /**
        * Constructs a UriHandlerPlugin instance with the given plugin system and optional descriptor.
        */
        constructor(pluginSystem: Editor.PluginSystem, descriptor?: Descriptor)
        
        /**
        * Handles a URI string and returns whether it was successfully processed.
        */
        handle(uri: string): boolean
        
        /**
        * The PluginSystem instance this plugin is registered with.
        
        * @readonly
        */
        pluginSystem: Editor.PluginSystem
        
    }

}

/**
* Namespace providing UUID creation and manipulation utilities.

* @module LensStudio:Uuid
*/
declare module "LensStudio:Uuid" {
    /**
    * Parses a UUID from its string representation.
    */
    export function fromString(uuid: string): Uuid
    
    /**
    * A UUID instance representing an invalid or null identifier.
    */
    let invalid: import('LensStudio:Uuid').Uuid
    
}

declare module "LensStudio:Uuid" {
    /**
    * Represents a universally unique identifier used to reference assets and components.
    */
    class Uuid {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Check if uuid is valid.
        */
        isValid(): boolean
        
        /**
        * Convert uuid to string.
        */
        toString(): string
        
    }

}

/**
* Module providing WebSocket client and server classes for bidirectional network communication.

* @module LensStudio:WebSocket
*/
declare module "LensStudio:WebSocket" {
}

declare module "LensStudio:WebSocket" {
    import {BaseSocket} from "LensStudio:Network" 
    
    /**
    * Client-side WebSocket connection that can send and receive data over a WebSocket connection.
    */
    class WebSocket extends BaseSocket {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Connects to a remote address using the WebSocket protocol.
        */
        connect(address: import('LensStudio:Network').Address): void
        
        /**
        * Sends binary or text data over the WebSocket connection, returning the number of bytes sent.
        */
        send(data: (Uint8Array|string)): number
        
        /**
        * Creates a new WebSocket instance.
        */
        static create(): WebSocket
        
    }

}

declare module "LensStudio:WebSocket" {
    import {BaseServer} from "LensStudio:Network" 
    
    /**
    * Server that accepts incoming WebSocket connections and manages connected client sockets.
    */
    class WebSocketServer extends BaseServer {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Creates and returns a new WebSocketServer instance.
        */
        static create(): WebSocketServer
        
    }

}

/**
* 2x2 column-major floating-point matrix.
*/
declare class mat2 {
    /**
    * Constructs a new mat2 initialized to the identity matrix.
    */
    constructor()
    
    /**
    * Adds another mat2 to this matrix and returns the result.
    */
    add(mat: mat2): mat2
    
    /**
    * Returns the scalar determinant of this matrix.
    */
    determinant(): number
    
    /**
    * Divides this matrix by another mat2 element-wise and returns the result.
    */
    div(mat: mat2): mat2
    
    /**
    * Returns true if this matrix equals the given mat2.
    */
    equal(mat: mat2): boolean
    
    /**
    * Returns the inverse of this matrix.
    */
    inverse(): mat2
    
    /**
    * Multiplies this matrix by another mat2 and returns the result.
    */
    mult(mat: mat2): mat2
    
    /**
    * Multiplies each element of this matrix by a scalar and returns the result.
    */
    multiplyScalar(scalar: number): mat2
    
    /**
    * Subtracts another mat2 from this matrix and returns the result.
    */
    sub(mat: mat2): mat2
    
    /**
    * Returns a string representation of this matrix.
    */
    toString(): string
    
    /**
    * Returns the transpose of this matrix.
    */
    transpose(): mat2
    
    /**
    * First column of the matrix as a vec2.
    */
    column0: vec2
    
    /**
    * Second column of the matrix as a vec2.
    */
    column1: vec2
    
    /**
    * Human-readable description string for this matrix instance.
    */
    description: string
    
    /**
    * Returns a mat2 set to the identity matrix.
    */
    static identity(): mat2
    
    /**
    * Returns a mat2 with all elements set to zero.
    */
    static zero(): mat2
    
}

/**
* A 3x3 matrix type supporting common linear algebra operations.
*/
declare class mat3 {
    /**
    * Constructs a new identity mat3 matrix.
    */
    constructor()
    
    /**
    * Adds another mat3 to this matrix and returns the result.
    */
    add(mat: mat3): mat3
    
    /**
    * Returns the scalar determinant of this matrix.
    */
    determinant(): number
    
    /**
    * Divides this matrix by another mat3 element-wise and returns the result.
    */
    div(mat: mat3): mat3
    
    /**
    * Returns true if this matrix equals the given mat3.
    */
    equal(mat: mat3): boolean
    
    /**
    * Returns the inverse of this matrix.
    */
    inverse(): mat3
    
    /**
    * Multiplies this matrix by another mat3 and returns the result.
    */
    mult(mat: mat3): mat3
    
    /**
    * Multiplies all elements of this matrix by a scalar value and returns the result.
    */
    multiplyScalar(scalar: number): mat3
    
    /**
    * Subtracts another mat3 from this matrix and returns the result.
    */
    sub(mat: mat3): mat3
    
    /**
    * Returns a string representation of this matrix.
    */
    toString(): string
    
    /**
    * Returns the transpose of this matrix.
    */
    transpose(): mat3
    
    /**
    * First column vector of the matrix.
    */
    column0: vec3
    
    /**
    * Second column vector of the matrix.
    */
    column1: vec3
    
    /**
    * Third column vector of the matrix.
    */
    column2: vec3
    
    /**
    * Human-readable description string for this matrix instance.
    */
    description: string
    
    /**
    * Returns a mat3 identity matrix.
    */
    static identity(): mat3
    
    /**
    * Constructs a mat3 rotation matrix from a given angle or rotation value.
    */
    static makeFromRotation(rotation: quat): mat3
    
    /**
    * Returns a mat3 with all elements set to zero.
    */
    static zero(): mat3
    
}

/**
* 4x4 matrix used for 3D transformations including rotation, scale, translation, and projection.
*/
declare class mat4 {
    /**
    * Constructs a new identity mat4.
    */
    constructor()
    
    /**
    * Adds another mat4 to this matrix and returns the result.
    */
    add(mat: mat4): mat4
    
    /**
    * Returns the scalar determinant of this matrix.
    */
    determinant(): number
    
    /**
    * Divides this matrix by another mat4 element-wise and returns the result.
    */
    div(mat: mat4): mat4
    
    /**
    * Returns true if this matrix equals the given mat4.
    */
    equal(mat: mat4): boolean
    
    /**
    * Extracts and returns the Euler angles as a vec3 from this matrix.
    */
    extractEulerAngles(): vec3
    
    /**
    * Returns the inverse of this matrix.
    */
    inverse(): mat4
    
    /**
    * Multiplies this matrix by another mat4 and returns the result.
    */
    mult(mat: mat4): mat4
    
    /**
    * Transforms a direction vector by this matrix, ignoring translation.
    */
    multiplyDirection(direction: vec3): vec3
    
    /**
    * Transforms a point by this matrix, applying translation.
    */
    multiplyPoint(point: vec3): vec3
    
    /**
    * Multiplies this matrix by a scalar value and returns the result.
    */
    multiplyScalar(scalar: number): mat4
    
    /**
    * Multiplies this matrix by a vec4 and returns the result.
    */
    multiplyVector(vector: vec4): vec4
    
    /**
    * Subtracts another mat4 from this matrix and returns the result.
    */
    sub(mat: mat4): mat4
    
    /**
    * Returns a string representation of this matrix.
    */
    toString(): string
    
    /**
    * Returns the transpose of this matrix.
    */
    transpose(): mat4
    
    /**
    * First column of the matrix as a vec4.
    */
    column0: vec4
    
    /**
    * Second column of the matrix as a vec4.
    */
    column1: vec4
    
    /**
    * Third column of the matrix as a vec4.
    */
    column2: vec4
    
    /**
    * Fourth column of the matrix as a vec4.
    */
    column3: vec4
    
    /**
    * Returns a string representation of the matrix.
    */
    description: string
    
    /**
    * Performs component-wise multiplication of two mat4 matrices and returns the result.
    */
    static compMult(a: mat4, b: mat4): mat4
    
    /**
    * Constructs a mat4 from translation, rotation quaternion, and scale components.
    */
    static compose(translation: vec3, rotation: quat, scale: vec3): mat4
    
    /**
    * Creates a mat4 from four column vectors.
    */
    static fromColumns(column0: vec4, column1: vec4, column2: vec4, column3: vec4): mat4
    
    /**
    * Creates a mat4 rotation matrix from Euler angles in radians.
    */
    static fromEulerAngles(angles: vec3): mat4
    
    /**
    * Creates a mat4 rotation matrix for a rotation around the X axis.
    */
    static fromEulerX(angle: number): mat4
    
    /**
    * Creates a mat4 rotation matrix for a rotation around the Y axis.
    */
    static fromEulerY(angle: number): mat4
    
    /**
    * Creates a mat4 rotation matrix for a rotation around the Z axis.
    */
    static fromEulerZ(angle: number): mat4
    
    /**
    * Creates a mat4 rotation matrix from a quaternion.
    */
    static fromRotation(rotation: quat): mat4
    
    /**
    * Creates a mat4 from four row vectors.
    */
    static fromRows(row0: vec4, row1: vec4, row2: vec4, row3: vec4): mat4
    
    /**
    * Creates a mat4 scale matrix from a vec3.
    */
    static fromScale(scale: vec3): mat4
    
    /**
    * Creates a mat4 translation matrix from a vec3.
    */
    static fromTranslation(translation: vec3): mat4
    
    /**
    * Returns a mat4 identity matrix.
    */
    static identity(): mat4
    
    /**
    * Creates a view matrix that orients toward a target from an eye position.
    */
    static lookAt(eye: vec3, center: vec3, up: vec3): mat4
    
    /**
    * Constructs a mat4 from three basis vectors.
    */
    static makeBasis(x: vec3, y: vec3, z: vec3): mat4
    
    /**
    * Creates an orthographic projection matrix.
    */
    static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): mat4
    
    /**
    * Computes the outer product of two vec4 vectors and returns the resulting mat4.
    */
    static outerProduct(a: vec4, b: vec4): mat4
    
    /**
    * Creates a perspective projection matrix.
    */
    static perspective(fov: number, aspect: number, near: number, far: number): mat4
    
    /**
    * Returns a mat4 with all elements set to zero.
    */
    static zero(): mat4
    
}

/**
* Utility class providing common math operations and constants.
*/
declare class MathUtils {
    
    /** @hidden */
    protected constructor()
    
    /**
    * Clamps value v between lo and hi.
    */
    static clamp(v: number, lo: number, hi: number): number
    
    /**
    * Linearly interpolates between a and b by time.
    */
    static lerp(a: number, b: number, time: number): number
    
    /**
    * Returns a random number between lo and hi.
    */
    static randomRange(lo: number, hi: number): number
    
    /**
    * Remaps value v from input range to output range.
    */
    static remap(v: number, inMin: number, inMax: number, outMin: number, outMax: number): number
    
    /**
    * Conversion factor from degrees to radians.
    */
    static DegToRad: number
    
    /**
    * Conversion factor from radians to degrees.
    */
    static RadToDeg: number
    
}

/**
* Quaternion type for representing rotations in 3D space.
*/
declare class quat {
    /**
    * Constructs a quaternion with the given w, x, y, z components.
    */
    constructor(w: number, x: number, y: number, z: number)
    
    /**
    * Computes the dot product with another quaternion.
    */
    dot(quat: quat): number
    
    /**
    * Returns true if this quaternion equals another quaternion.
    */
    equal(quat: quat): boolean
    
    /**
    * Returns the rotation angle in radians represented by this quaternion.
    */
    getAngle(): number
    
    /**
    * Returns the rotation axis as a vec3.
    */
    getAxis(): vec3
    
    /**
    * Returns the inverse of this quaternion.
    */
    invert(): quat
    
    /**
    * Multiplies this quaternion by another, combining rotations.
    */
    multiply(quat: quat): quat
    
    /**
    * Rotates a vec3 by this quaternion.
    */
    multiplyVec3(vec3: vec3): vec3
    
    /**
    * Returns a normalized copy of this quaternion.
    */
    normalize(): void
    
    /**
    * Converts this quaternion to Euler angles in radians.
    */
    toEulerAngles(): vec3
    
    /**
    * Returns a string representation of this quaternion.
    */
    toString(): string
    
    /**
    * The w (scalar) component of the quaternion.
    */
    w: number
    
    /**
    * The x component of the quaternion.
    */
    x: number
    
    /**
    * The y component of the quaternion.
    */
    y: number
    
    /**
    * The z component of the quaternion.
    */
    z: number
    
    /**
    * Creates a quaternion from an angle in radians and a rotation axis.
    */
    static angleAxis(angle: number, axis: vec3): quat
    
    /**
    * Returns the angle in radians between two quaternions.
    */
    static angleBetween(a: quat, b: quat): number
    
    /**
    * Creates a quaternion from Euler angles given as separate x, y, z values.
    */
    static fromEulerAngles(x: number, y: number, z: number): quat
    
    /**
    * Creates a quaternion from a vec3 of Euler angles.
    */
    static fromEulerVec(eulerAngles: vec3): quat
    
    /**
    * Creates a quaternion from a 3x3 rotation matrix.
    */
    static fromRotationMat(rotationMat: mat3): quat
    
    /**
    * Creates a quaternion from a 4x4 rotation matrix.
    */
    static fromRotationMat4(rotationMat4: mat4): quat
    
    /**
    * Linearly interpolates between two quaternions by factor t.
    */
    static lerp(a: quat, b: quat, time: number): quat
    
    /**
    * Creates a quaternion representing a rotation that looks from one point toward another.
    */
    static lookAt(forward: vec3, up: vec3): quat
    
    /**
    * Returns the identity quaternion representing no rotation.
    */
    static quatIdentity(): quat
    
    /**
    * Creates a quaternion representing the rotation from one vector to another.
    */
    static rotationFromTo(from: vec3, to: vec3): quat
    
    /**
    * Spherically interpolates between two quaternions by factor t.
    */
    static slerp(a: quat, b: quat, time: number): quat
    
}

/**
* Base class for all script-accessible Lens Studio objects.
*/
declare class ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
    * Returns the name of this object's type.
    */
    getTypeName(): string
    
    /**
    * Returns true if the object is of the specified type.
    */
    isOfType(type: string): boolean
    
    /**
    * Returns true if this object refers to the same instance as the given object.
    */
    isSame(other: ScriptObject): boolean
    
}

/**
* Provides encrypted storage for each plugin module's sensitive data, like access tokens. It uses Keychain on macOS and Credentials Manager on Windows. The data can be stored and retrieved as string-to-string key value pairs via a global secureLocalStorage object. Data for each plugin module (module.json) is kept separate from all others. There is a 2KB limit on the string size because this is meant for small pieces of secure info rather than a generic container.

* @example
* ```js
* secureLocalStorage.setItem('myLoginPassword', 'myPassword');
* console.log("My stored password is: " + secureLocalStorage.getItem('myLoginPassword'));
* secureLocalStorage.removeItem('myLoginPassword');
* console.log("My stored password is: " + secureLocalStorage.getItem('myLoginPassword'));
* ```
*/
declare class SecureLocalStorage extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
    /**
    * Remove all values in the storage.
    */
    clear(): void
    
    /**
    * Get the value stored under `keyName`.
    */
    getItem(keyName: string): string | undefined
    
    /**
    * Get the length of the storage.
    */
    length(): number
    
    /**
    * Remove the stored value under `keyName`.
    */
    removeItem(keyName: string): void
    
    /**
    * Sets the value stored under `keyName`.
    */
    setItem(keyName: string, keyValue: string): void
    
}

/**
* Namespace providing task management utilities for tracking and coordinating asynchronous operations.
*/
declare class Task {
    
    /** @hidden */
    protected constructor()
    
}

declare namespace Task {
    /**
    * Interface for a plugin component that manages pending tasks and exposes a promise that resolves when all tasks complete.
    */
    class ITaskManager extends Editor.IPluginComponent {
        
        /** @hidden */
        protected constructor()
        
        /**
        * Returns a promise that resolves when all pending tasks have completed.
        */
        whenAllCompleted(): Promise<void>
        
        /**
        * Unique identifier for the ITaskManager interface, used for component lookup.
        */
        static interfaceId: Editor.InterfaceId
        
    }

}

declare namespace Task {
    /**
    * Concrete implementation of ITaskManager that tracks and coordinates task completion within the editor.
    */
    class TaskManager extends Task.ITaskManager {
        
        /** @hidden */
        protected constructor()
        
    }

}

/**
* Decodes binary data from a Uint8Array into a string using a specified character encoding.
*/
declare class TextDecoder extends ScriptObject {
    /**
    * Constructs a TextDecoder with an optional encoding name (defaults to UTF-8).
    */
    constructor(encoding?: string)
    
    /**
    * Decodes a Uint8Array into a string using the instance's encoding.
    */
    decode(data: Uint8Array): string
    
    /**
    * The character encoding name used by this decoder, e.g. 'utf-8'.
    
    * @readonly
    */
    encoding: string
    
}

/**
* Encodes strings into UTF-8 byte arrays.
*/
declare class TextEncoder extends ScriptObject {
    /**
    * Creates a new TextEncoder instance.
    */
    constructor()
    
    /**
    * Encodes a string into a Uint8Array using UTF-8.
    */
    encode(value: string): Uint8Array
    
    /**
    * Encodes a string into an existing Uint8Array in place.
    */
    encodeInto(value: string, result: Uint8Array): void
    
    /**
    * The encoding format used by this encoder, always 'utf-8'.
    
    * @readonly
    */
    encoding: string
    
}

/**
* A handle for a timer. You can create a timeout using {@link setTimeout}.
*/
declare class Timeout extends ScriptObject {
    
    /** @hidden */
    protected constructor()
    
}

/**
* 2D vector with x and y components, used for 2D positions, directions, and math operations.
*/
declare class vec2 {
    /**
    * Constructs a vec2 with the given x and y values.
    */
    constructor(x: number, y: number)
    
    /**
    * Returns a new vec2 that is the sum of this and the given vector.
    */
    add(vec: vec2): vec2
    
    /**
    * Adds the given vector to this vector in place.
    */
    addInPlace(vec: vec2): void
    
    /**
    * Returns the angle in radians between this vector and the given vector.
    */
    angleTo(vec: vec2): number
    
    /**
    * Returns a new vec2 with its length clamped to the given maximum.
    */
    clampLength(length: number): vec2
    
    /**
    * Clamps the length of this vector to the given maximum in place.
    */
    clampLengthInPlace(length: number): void
    
    /**
    * Returns a new vec2 with the same x and y values.
    */
    clone(): vec2
    
    /**
    * Copies x and y values from the given vector into this vector.
    */
    copyFrom(source: (vec3|vec4|vec2)): void
    
    /**
    * Returns the distance between this vector and the given vector.
    */
    distance(vec: vec2): number
    
    /**
    * Returns the squared distance between this vector and the given vector.
    */
    distanceSquared(vec: vec2): number
    
    /**
    * Returns a new vec2 that is this vector divided component-wise by the given vector.
    */
    div(vec: vec2): vec2
    
    /**
    * Divides this vector component-wise by the given vector in place.
    */
    divInPlace(vec: vec2): void
    
    /**
    * Returns the dot product of this vector and the given vector.
    */
    dot(vec: vec2): number
    
    /**
    * Returns true if this vector and the given vector have equal x and y values.
    */
    equal(vec: vec2): boolean
    
    /**
    * Sets all components of this vector to the given scalar value.
    */
    fill(scalar: number): void
    
    /**
    * Linearly interpolates this vector toward the target vector by the given factor in place.
    */
    lerpInPlace(target: vec2, t: number): void
    
    /**
    * Returns a new vec2 moved from this vector toward the target by at most the given max distance.
    */
    moveTowards(target: vec2, step: number): vec2
    
    /**
    * Moves this vector toward the target by at most the given max distance in place.
    */
    moveTowardsInPlace(point: vec2, magnitude: number): void
    
    /**
    * Returns a new vec2 that is this vector multiplied component-wise by the given vector.
    */
    mult(vec: vec2): vec2
    
    /**
    * Multiplies this vector component-wise by the given vector in place.
    */
    multInPlace(vec: vec2): void
    
    /**
    * Returns a new vec2 with the same direction but unit length.
    */
    normalize(): vec2
    
    /**
    * Normalizes this vector to unit length in place.
    */
    normalizeInPlace(): void
    
    /**
    * Returns the projection of this vector onto the given vector.
    */
    project(onto: vec2): vec2
    
    /**
    * Projects this vector onto the given vector in place.
    */
    projectInPlace(onto: vec2): void
    
    /**
    * Returns this vector projected onto the plane defined by the given normal.
    */
    projectOnPlane(planeNormal: vec2): vec2
    
    /**
    * Projects this vector onto the plane defined by the given normal in place.
    */
    projectOnPlaneInPlace(planeNormal: vec2): void
    
    /**
    * Returns the reflection of this vector off the surface defined by the given normal.
    */
    reflect(planeNormal: vec2): vec2
    
    /**
    * Reflects this vector off the surface defined by the given normal in place.
    */
    reflectInPlace(planeNormal: vec2): void
    
    /**
    * Returns a new vec2 scaled by the given scalar.
    */
    scale(vec: vec2): vec2
    
    /**
    * Scales this vector by the given scalar in place.
    */
    scaleInPlace(vec: vec2): void
    
    /**
    * Sets this vector to a random unit vector.
    */
    setRandomUnitVector(): void
    
    /**
    * Sets the x and y components of this vector.
    */
    setXY(x?: number, y?: number): void
    
    /**
    * Returns a new vec2 that is this vector minus the given vector.
    */
    sub(vec: vec2): vec2
    
    /**
    * Subtracts the given vector from this vector in place.
    */
    subInPlace(vec: vec2): void
    
    /**
    * Returns a string representation of this vector.
    */
    toString(): string
    
    /**
    * Returns a new vec2 uniformly scaled by the given scalar.
    */
    uniformScale(scale: number): vec2
    
    /**
    * Uniformly scales this vector by the given scalar in place.
    */
    uniformScaleInPlace(scale: number): void
    
    /**
    * Alias for the y component.
    */
    g: number
    
    /**
    * Magnitude of the vector.
    */
    length: number
    
    /**
    * Squared magnitude of the vector.
    */
    lengthSquared: number
    
    /**
    * Alias for the x component.
    */
    r: number
    
    /**
    * Horizontal component of the vector.
    */
    x: number
    
    /**
    * Vertical component of the vector.
    */
    y: number
    
    /**
    * Static vec2 pointing in the negative y direction (0, -1).
    */
    static down(): vec2
    
    /**
    * Static vec2 pointing in the negative x direction (-1, 0).
    */
    static left(): vec2
    
    /**
    * Returns a new vec2 linearly interpolated between two vectors by the given factor.
    */
    static lerp(from: vec2, to: vec2, t: number): vec2
    
    /**
    * Returns a vec2 with the component-wise maximum of two vectors.
    */
    static max(a: vec2, b: vec2): vec2
    
    /**
    * Returns a vec2 with the component-wise minimum of two vectors.
    */
    static min(a: vec2, b: vec2): vec2
    
    /**
    * Static vec2 with all components set to 1.
    */
    static one(): vec2
    
    /**
    * Returns a random unit vec2.
    */
    static randomUnitVector(): vec2
    
    /**
    * Static vec2 pointing in the positive x direction (1, 0).
    */
    static right(): vec2
    
    /**
    * Static vec2 pointing in the positive y direction (0, 1).
    */
    static up(): vec2
    
    /**
    * Static vec2 with all components set to 0.
    */
    static zero(): vec2
    
}

/**
* 3-component floating-point vector used for 3D positions, directions, and RGB color values.
*/
declare class vec3 {
    /**
    * Constructs a vec3 with the given x, y, z components.
    */
    constructor(x: number, y: number, z: number)
    
    /**
    * Returns a new vec3 that is the sum of this vector and the given vector.
    */
    add(vec: vec3): vec3
    
    /**
    * Adds the given vector to this vector in place.
    */
    addInPlace(vec: vec3): void
    
    /**
    * Returns the angle in radians between this vector and the given vector.
    */
    angleTo(vec: vec3): number
    
    /**
    * Returns a new vec3 with its length clamped to the given maximum length.
    */
    clampLength(length: number): vec3
    
    /**
    * Clamps the length of this vector to the given maximum length in place.
    */
    clampLengthInPlace(length: number): void
    
    /**
    * Returns a new vec3 with the same component values as this vector.
    */
    clone(): vec3
    
    /**
    * Copies the component values from the given vector into this vector.
    */
    copyFrom(source: (vec3|vec4|vec2)): void
    
    /**
    * Returns the cross product of this vector and the given vector.
    */
    cross(vec: vec3): vec3
    
    /**
    * Computes the cross product of this vector and the given vector, storing the result in this vector.
    */
    crossInPlace(vec: vec3): void
    
    /**
    * Returns the Euclidean distance between this vector and the given vector.
    */
    distance(vec: vec3): number
    
    /**
    * Returns the squared Euclidean distance between this vector and the given vector.
    */
    distanceSquared(vec: vec3): number
    
    /**
    * Returns a new vec3 that is this vector divided component-wise by the given vector.
    */
    div(vec: vec3): vec3
    
    /**
    * Divides this vector component-wise by the given vector in place.
    */
    divInPlace(vec: vec3): void
    
    /**
    * Returns the dot product of this vector and the given vector.
    */
    dot(vec: vec3): number
    
    /**
    * Returns true if this vector's components are equal to the given vector's components.
    */
    equal(vec: vec3): boolean
    
    /**
    * Sets all components of this vector to the given value.
    */
    fill(scalar: number): void
    
    /**
    * Linearly interpolates this vector toward the given target vector by factor t, in place.
    */
    lerpInPlace(target: vec3, t: number): void
    
    /**
    * Returns a new vec3 moved from this vector toward the target by at most maxDelta distance.
    */
    moveTowards(target: vec3, step: number): vec3
    
    /**
    * Moves this vector toward the target by at most maxDelta distance, in place.
    */
    moveTowardsInPlace(point: vec3, magnitude: number): void
    
    /**
    * Returns a new vec3 that is this vector multiplied component-wise by the given vector.
    */
    mult(vec: vec3): vec3
    
    /**
    * Multiplies this vector component-wise by the given vector in place.
    */
    multInPlace(vec: vec3): void
    
    /**
    * Returns a new vec3 with the same direction as this vector but with length 1.
    */
    normalize(): vec3
    
    /**
    * Normalizes this vector to unit length in place.
    */
    normalizeInPlace(): void
    
    /**
    * Returns the projection of this vector onto the given vector.
    */
    project(onto: vec3): vec3
    
    /**
    * Projects this vector onto the given vector in place.
    */
    projectInPlace(onto: vec3): void
    
    /**
    * Returns the projection of this vector onto the plane defined by the given normal.
    */
    projectOnPlane(planeNormal: vec3): vec3
    
    /**
    * Projects this vector onto the plane defined by the given normal, in place.
    */
    projectOnPlaneInPlace(planeNormal: vec3): void
    
    /**
    * Returns the reflection of this vector off a surface with the given normal.
    */
    reflect(planeNormal: vec3): vec3
    
    /**
    * Reflects this vector off a surface with the given normal, in place.
    */
    reflectInPlace(planeNormal: vec3): void
    
    /**
    * Returns a new vec3 rotated from this vector toward the target, by at most maxAngle radians.
    */
    rotateTowards(target: vec3, step: number): vec3
    
    /**
    * Rotates this vector toward the target by at most maxAngle radians, in place.
    */
    rotateTowardsInPlace(target: vec3, step: number): void
    
    /**
    * Returns a new vec3 that is this vector multiplied by the given scalar.
    */
    scale(vec: vec3): vec3
    
    /**
    * Multiplies this vector by the given scalar in place.
    */
    scaleInPlace(vec: vec3): void
    
    /**
    * Sets the r, g, b components of this vector.
    */
    setRGB(r?: number, g?: number, b?: number): void
    
    /**
    * Sets this vector to a random unit vector in place.
    */
    setRandomUnitVector(): void
    
    /**
    * Sets the x, y, z components of this vector.
    */
    setXYZ(x?: number, y?: number, z?: number): void
    
    /**
    * Spherically interpolates this vector toward the given target vector by factor t, in place.
    */
    slerpInPlace(target: vec3, t: number): void
    
    /**
    * Returns a new vec3 that is this vector minus the given vector.
    */
    sub(vec: vec3): vec3
    
    /**
    * Subtracts the given vector from this vector in place.
    */
    subInPlace(vec: vec3): void
    
    /**
    * Returns a string representation of this vector's components.
    */
    toString(): string
    
    /**
    * Returns a new vec3 with all components multiplied by the given scalar.
    */
    uniformScale(scale: number): vec3
    
    /**
    * Multiplies all components of this vector by the given scalar in place.
    */
    uniformScaleInPlace(scale: number): void
    
    /**
    * Blue channel component, equivalent to z.
    */
    b: number
    
    /**
    * Green channel component, equivalent to y.
    */
    g: number
    
    /**
    * The Euclidean length of this vector.
    */
    length: number
    
    /**
    * The squared Euclidean length of this vector.
    */
    lengthSquared: number
    
    /**
    * Red channel component, equivalent to x.
    */
    r: number
    
    /**
    * X component of this vector.
    */
    x: number
    
    /**
    * Y component of this vector.
    */
    y: number
    
    /**
    * Z component of this vector.
    */
    z: number
    
    /**
    * Static vec3 pointing in the negative Z direction (0, 0, -1).
    */
    static back(): vec3
    
    /**
    * Static vec3 pointing in the negative Y direction (0, -1, 0).
    */
    static down(): vec3
    
    /**
    * Static vec3 pointing in the positive Z direction (0, 0, 1).
    */
    static forward(): vec3
    
    /**
    * Static vec3 pointing in the negative X direction (-1, 0, 0).
    */
    static left(): vec3
    
    /**
    * Returns a new vec3 linearly interpolated between two vectors by factor t.
    */
    static lerp(from: vec3, to: vec3, t: number): vec3
    
    /**
    * Returns a new vec3 with the component-wise maximum of two vectors.
    */
    static max(a: vec3, b: vec3): vec3
    
    /**
    * Returns a new vec3 with the component-wise minimum of two vectors.
    */
    static min(a: vec3, b: vec3): vec3
    
    /**
    * Static vec3 with all components set to 1.
    */
    static one(): vec3
    
    /**
    * Returns an orthonormalized version of the given vector relative to a reference vector.
    */
    static orthonormalize(a: vec3, b: vec3): void
    
    /**
    * Returns a new vec3 with a random unit direction.
    */
    static randomUnitVector(): vec3
    
    /**
    * Static vec3 pointing in the positive X direction (1, 0, 0).
    */
    static right(): vec3
    
    /**
    * Returns a new vec3 spherically interpolated between two vectors by factor t.
    */
    static slerp(from: vec3, to: vec3, t: number): vec3
    
    /**
    * Static vec3 pointing in the positive Y direction (0, 1, 0).
    */
    static up(): vec3
    
    /**
    * Static vec3 with all components set to 0.
    */
    static zero(): vec3
    
}

/**
* Four-component float vector used for XYZW coordinates and RGBA color values.
*/
declare class vec4 {
    /**
    * Constructs a vec4 with the given x, y, z, and w components.
    */
    constructor(x: number, y: number, z: number, w: number)
    
    /**
    * Returns a new vec4 that is the sum of this vector and the given vector.
    */
    add(vec: vec4): vec4
    
    /**
    * Adds the given vector to this vector in place.
    */
    addInPlace(vec: vec4): void
    
    /**
    * Returns the angle in radians between this vector and the given vector.
    */
    angleTo(vec: vec4): number
    
    /**
    * Returns a new vec4 with its length clamped to the given maximum.
    */
    clampLength(length: number): vec4
    
    /**
    * Clamps the length of this vector to the given maximum in place.
    */
    clampLengthInPlace(length: number): void
    
    /**
    * Returns a new vec4 with the same component values.
    */
    clone(): vec4
    
    /**
    * Copies component values from the given vec4 into this vector.
    */
    copyFrom(source: (vec3|vec4|vec2)): void
    
    /**
    * Returns the distance between this vector and the given vector.
    */
    distance(vec: vec4): number
    
    /**
    * Returns the squared distance between this vector and the given vector.
    */
    distanceSquared(vec: vec4): number
    
    /**
    * Returns a new vec4 that is this vector divided component-wise by the given vector.
    */
    div(vec: vec4): vec4
    
    /**
    * Divides this vector component-wise by the given vector in place.
    */
    divInPlace(vec: vec4): void
    
    /**
    * Returns the dot product of this vector and the given vector.
    */
    dot(vec: vec4): number
    
    /**
    * Returns true if this vector and the given vector have equal components.
    */
    equal(vec: vec4): boolean
    
    /**
    * Sets all components of this vector to the given value.
    */
    fill(scalar: number): void
    
    /**
    * Linearly interpolates this vector toward the given vector by the given factor in place.
    */
    lerpInPlace(target: vec4, t: number): void
    
    /**
    * Returns a new vec4 moved toward the target by at most the given max delta.
    */
    moveTowards(target: vec4, step: number): vec4
    
    /**
    * Moves this vector toward the target by at most the given max delta in place.
    */
    moveTowardsInPlace(point: vec4, magnitude: number): void
    
    /**
    * Returns a new vec4 that is this vector multiplied component-wise by the given vector.
    */
    mult(vec: vec4): vec4
    
    /**
    * Multiplies this vector component-wise by the given vector in place.
    */
    multInPlace(vec: vec4): void
    
    /**
    * Returns a new vec4 with unit length in the same direction.
    */
    normalize(): vec4
    
    /**
    * Normalizes this vector to unit length in place.
    */
    normalizeInPlace(): void
    
    /**
    * Returns a new vec4 projected onto the given vector.
    */
    project(onto: vec4): vec4
    
    /**
    * Projects this vector onto the given vector in place.
    */
    projectInPlace(onto: vec4): void
    
    /**
    * Returns a new vec4 projected onto the plane defined by the given normal.
    */
    projectOnPlane(planeNormal: vec4): vec4
    
    /**
    * Projects this vector onto the plane defined by the given normal in place.
    */
    projectOnPlaneInPlace(planeNormal: vec4): void
    
    /**
    * Returns a new vec4 reflected off the plane defined by the given normal.
    */
    reflect(planeNormal: vec4): vec4
    
    /**
    * Reflects this vector off the plane defined by the given normal in place.
    */
    reflectInPlace(planeNormal: vec4): void
    
    /**
    * Returns a new vec4 scaled by the given scalar.
    */
    scale(vec: vec4): vec4
    
    /**
    * Scales this vector by the given scalar in place.
    */
    scaleInPlace(vec: vec4): void
    
    /**
    * Sets the r, g, b, and a components of this vector.
    */
    setRGBA(r?: number, g?: number, b?: number, a?: number): void
    
    /**
    * Sets the x, y, z, and w components of this vector.
    */
    setXYZW(x?: number, y?: number, z?: number, w?: number): void
    
    /**
    * Returns a new vec4 that is this vector minus the given vector.
    */
    sub(vec: vec4): vec4
    
    /**
    * Subtracts the given vector from this vector in place.
    */
    subInPlace(vec: vec4): void
    
    /**
    * Returns a string representation of this vector.
    */
    toString(): string
    
    /**
    * Returns a new vec4 with all components multiplied by the given scalar.
    */
    uniformScale(scale: number): vec4
    
    /**
    * Multiplies all components of this vector by the given scalar in place.
    */
    uniformScaleInPlace(scale: number): void
    
    /**
    * Alpha component of the vector, equivalent to w.
    */
    a: number
    
    /**
    * Blue component of the vector, equivalent to z.
    */
    b: number
    
    /**
    * Green component of the vector, equivalent to y.
    */
    g: number
    
    /**
    * Magnitude of the vector.
    */
    length: number
    
    /**
    * Squared magnitude of the vector.
    */
    lengthSquared: number
    
    /**
    * Red component of the vector, equivalent to x.
    */
    r: number
    
    /**
    * Fourth component of the vector.
    */
    w: number
    
    /**
    * First component of the vector.
    */
    x: number
    
    /**
    * Second component of the vector.
    */
    y: number
    
    /**
    * Third component of the vector.
    */
    z: number
    
    /**
    * Returns a new vec4 linearly interpolated between two vectors by the given factor.
    */
    static lerp(from: vec4, to: vec4, t: number): vec4
    
    /**
    * Returns a new vec4 with the component-wise maximum of two vectors.
    */
    static max(a: vec4, b: vec4): vec4
    
    /**
    * Returns a new vec4 with the component-wise minimum of two vectors.
    */
    static min(a: vec4, b: vec4): vec4
    
    /**
    * Returns a vec4 with all components set to 1.
    */
    static one(): vec4
    
    /**
    * Returns a vec4 with all components set to 0.
    */
    static zero(): vec4
    
}

/**
* A 4-component boolean vector with x/y/z/w and r/g/b/a accessors.
*/
declare class vec4b {
    /**
    * Constructs a vec4b from four boolean components x, y, z, and w.
    */
    constructor(x: boolean, y: boolean, z: boolean, w: boolean)
    
    /**
    * Returns a string representation of the vector.
    */
    toString(): string
    
    /**
    * The alpha (w) boolean component.
    */
    a: boolean
    
    /**
    * The blue (z) boolean component.
    */
    b: boolean
    
    /**
    * The green (y) boolean component.
    */
    g: boolean
    
    /**
    * The red (x) boolean component.
    */
    r: boolean
    
    /**
    * The fourth (w) boolean component.
    */
    w: boolean
    
    /**
    * The first (x) boolean component.
    */
    x: boolean
    
    /**
    * The second (y) boolean component.
    */
    y: boolean
    
    /**
    * The third (z) boolean component.
    */
    z: boolean
    
}

/**
 * @module LensStudio:GeneralUtils.js
 */
declare module "LensStudio:GeneralUtils.js" {
/**
 * Converts a callback-based function to a Promise-based function.
 * @param fn The callback-based function to convert.
 * @returns A Promise-based version of the function.
 */
export function promisify<T>(fn: (callback: (err: Error | null, result?: T) => void) => void): Promise<T>;

}
/**
 * @module LensStudio:HierarchyUtils.js
 */
declare module "LensStudio:HierarchyUtils.js" {
/**
 * Represents the options for creating a scene object.
 */
export interface CreateOptions {
    /**
     * The scene in which the object will be created.
     */
    scene: Editor.Assets.Scene;
    /**
     * The parent object under which the new object will be created.
     */
    parent: Editor.Model.SceneObject;
    /**
     * The type(s) of component(s) to be attached to the new object.
     * if null, no component will be attached.
     */
    componentType: string | string[] | null;
    /**
     * The name of the new object
     */
    name: string;
}
/**
 * Represents the options for searching.
 */
export interface SearchOptions {
    /**
     * The maximum depth to search. 1 means only the immediate children of the base object.
     */
    maxDepth?: number;
    /**
     * Indicates whether to find all matches or stop at the first match.
     */
    findAll?: boolean;
    /**
     * Indicates whether to create the item if it is not found.
     */
    createIfNotFound?: boolean;
    /**
     * The options for creating the item.
     */
    createOptions?: CreateOptions;
}
/**
 * Finds a scene object or an array of scene objects in the ancestors of a given base scene object by the specified component type.
 *
 * @param base - The base scene object from which to start the search.
 * @param componentType - The type of component to search for.
 * @param options - Optional search options.
 * @param options.maxDepth - The maximum depth to search. Default is 100.
 * @param options.findAll - Whether to find all matches. Default is false.
 * @param options.createIfNotFound - Whether to create if not found. Default is false.
 * @param options.createOptions - Options for creation if needed.
 * @returns An array of found scene objects, or null if not found.
 */
export function findInAncestorsByType(base: Editor.Model.SceneObject, componentType: keyof ComponentNameMap, options?: SearchOptions): Editor.Model.SceneObject[];
/**
 * Finds a scene object or an array of scene objects within the descendants of a base scene object, based on the specified component type.
 *
 * @param base - The base scene object or scene to search within.
 * @param componentType - The type of component to search for.
 * @param options - Optional search options.
 * @returns an array of found scene objects, or null if not found.
 */
export function findInDescendantsByType(base: Editor.Model.SceneObject | Editor.Assets.Scene, componentType: string, options?: SearchOptions): Editor.Model.SceneObject[];
/**
 * Finds a scene object with the specified name in the ancestors of the given base scene object.
 *
 * @param base - The base scene object from which to start the search.
 * @param name - The name of the scene object to find. Only exact matches are considered.
 * @param options - The search options.
 * @returns The found scene object if `findAll` is `false`, an array of found scene objects if `findAll` is `true`, or `null` if no scene object is found.
 */
export function findInAncestorsByName(base: Editor.Model.SceneObject, name: string, options?: SearchOptions): Editor.Model.SceneObject[];
/**
 * Finds a scene object or an array of scene objects in the descendants of a base scene object by name.
 *
 * @param base - The base scene object to search in.
 * @param name - The name of the scene object(s) to find. Only exact matches are considered.
 * @param options - Optional search options.
 * @param options.maxDepth - The maximum depth to search. 1 means only the immediate children of the base object. Default is 100.
 * @param options.findAll - Indicates whether to find all matches or stop at the first match. Default is false.
 * @param options.createIfNotFound - Indicates whether to create the item if it is not found. Default is false.
 * @param options.createOptions - The options for creating the item. Default is null.
 *
 *
 * @returns an array of found scene objects, or null if not found.
 */
export function findInDescendantsByName(base: Editor.Model.SceneObject | Editor.Assets.Scene, name: string, options?: SearchOptions): Editor.Model.SceneObject[];
/**
 * Finds objects of a specific component type in the root of a scene.
 *
 * @param scene - The scene to search in.
 * @param componentType - The type of component to search for.
 * @param options - Additional search options.
 * @returns an array of found scene objects, or null if not found.
 */
export function findInRootObjectsByType(scene: Editor.Assets.Scene, componentType: string, options?: SearchOptions): Editor.Model.SceneObject[];
/**
 * Finds a scene object or an array of scene objects in the root objects of a scene by name.
 *
 * @param scene - The scene to search in.
 * @param name - The name of the scene object(s) to find. Only exact matches are considered.
 * @param options - The search options.
 * @returns an array of found scene objects, or null if not found.
 */
export function findInRootObjectsByName(scene: Editor.Assets.Scene, name: string, options?: SearchOptions): Editor.Model.SceneObject[];
/**
 * Finds or creates a child scene object with the specified name under the given root object.
 * It only searches the immediate children of the root object.
 * If a child object with the specified name already exists, it is returned.
 * Otherwise, a new scene object is created, added to the scene, and assigned the specified name.
 *
 * @param rootObject - The root object under which to search for or create the child object.
 * @param name - The name of the child object to find or create. Only exact matches are considered.
 * @param scene - The scene in which to add the new scene object if it needs to be created.
 * @returns The found or created child scene object.
 */
export function findOrCreateChildWithName(rootObject: Editor.Model.SceneObject, name: string, scene: Editor.Assets.Scene): Editor.Model.SceneObject;
/**
 * Finds the nearest camera in the ancestors of the given scene object.
 *
 * @param baseSceneObject - The scene object from which to start the search.
 * @param cameraType - The type of camera to search for (e.g., Orthographic, Perspective). Use null for any type.
 * @param maxDepth - Maximum search depth. Default is 1000.
 * @returns The nearest matching camera or null.
 */
export function findNearestCameraInAncestors(baseSceneObject: Editor.Model.SceneObject, cameraType?: Editor.Components.CameraType, maxDepth?: number): Editor.Model.SceneObject;
/**
 * Finds the nearest camera ancestor of a scene object, if one exists.
 * if not, it returns the first camera in the scene.
 *
 * @param sceneObject - The scene object to search for orthographic camera ancestors.
 * @param cameraType - The type of camera to search for, or null to find any camera.
 * @returns The nearest camera ancestor of the scene object, or null if none is found.
 */
export function getNearestOrFirstCamera(sceneObject: Editor.Model.SceneObject, scene: Editor.Assets.Scene, cameraType?: Editor.Components.CameraType): Editor.Model.SceneObject;
/**
 * Finds the first camera in the scene.
 *
 * @param cameraType - The type of camera to search for, or null to find any camera.
 * @returns The first camera in the scene model, or null if none is found.
 */
export function getFirstCameraInScene(scene: Editor.Assets.Scene, cameraType?: Editor.Components.CameraType): Editor.Model.SceneObject;
/**
 * Retrieves or creates a canvas component for a given camera object.
 *
 * @param cameraObject - The camera object to retrieve or create the canvas component for.
 * @param unitType - The unit type for the canvas component.
 * @returns The canvas component associated with the camera object.
 */
export function getOrCreateCanvas(cameraObject: Editor.Model.SceneObject, unitType: Editor.Components.UnitType): Editor.Components.Canvas;
/**
 * Retrieves or creates a ScreenRegionComponent for a given camera object and scene.
 *
 * @param cameraObject - The camera object to search for a ScreenRegionComponent.
 * @param scene - The scene in which to create the ScreenRegionComponent if it doesn't exist.
 * @returns The ScreenRegionComponent associated with the camera object, or a newly created one.
 */
export function getOrCreateScreenRegion(cameraObject: Editor.Model.SceneObject, scene: Editor.Assets.Scene): Editor.Components.ScreenRegionComponent;
/**
 * Creates an orthographic camera component on a scene object.
 *
 * @param scene - The scene in which the camera will be created.
 * @param sceneObject - The scene object on which the camera component will be added.
 * @param unitType - The unit type for the canvas component (optional, default is `Editor.Components.UnitType.Points`).
 * @returns The modified scene object with the added camera and canvas components.
 */
export function createOrthoCameraOnObject(scene: Editor.Assets.Scene, sceneObject: Editor.Model.SceneObject, unitType?: Editor.Components.UnitType, renderLayer?: Editor.Model.LayerId): Editor.Model.SceneObject;
/**
 * Creates a perspective camera on the specified scene object.
 *
 * @param scene - The scene in which the camera will be created.
 * @param sceneObject - The scene object on which the camera will be added.
 * @returns The modified scene object with the added camera component.
 */
export function createPerspectiveCameraOnObject(scene: Editor.Assets.Scene, sceneObject: Editor.Model.SceneObject, renderLayer?: Editor.Model.LayerId): Editor.Model.SceneObject;
/**
 * Finds or creates an orthographic camera for a given scene object.
 *
 * @param scene - The scene in which the camera will be created or searched.
 * @param sceneObject - The scene object for which the camera will be created or searched.
 * @param canvasUnitType - The unit type for the canvas component of the camera. Defaults to `Editor.Components.UnitType.Points`.
 * @returns An object containing the camera object, screen region component, and canvas component.
 */
export function findOrCreateOrthoCameraForObject(scene: Editor.Assets.Scene, sceneObject: Editor.Model.SceneObject, canvasUnitType?: Editor.Components.UnitType): {
    cameraObject: Editor.Model.SceneObject;
    screenRegionComponent: Editor.Components.ScreenRegionComponent;
    canvasComponent: Editor.Components.Canvas;
};
/**
 * Finds or creates a camera object of the specified type within the given scene.
 *
 * @param scene - The scene in which to find or create the camera object.
 * @param cameraType - The type of camera to find or create (Orthographic or Perspective).
 * @param bearerSceneObject - Optional. The scene object to which the new camera will be attached if created.
 * @returns The scene object containing the camera of the specified type.
 * @throws Will throw an error if the camera type is invalid.
 */
export function findOrCreateCameraObject(scene: Editor.Assets.Scene, cameraType: Editor.Components.CameraType, bearerSceneObject?: Editor.Model.SceneObject): Editor.Model.SceneObject;

}
/**
 * @module LensStudio:LcaUtils.js
 */
declare module "LensStudio:LcaUtils.js" {
import * as Network from "LensStudio:Network";
/**
 * Adds LCA token to Http Request
 *
 * @param request - Request object which LCA token needs to be attached to
 * @param issuer - Issuer URL which used for generating LCA token
 */
export function attachLCAHeader(request: Network.HttpRequest, issuer: string): void;

}
/**
 * @module LensStudio:ScopedStorage.js
 */
declare module "LensStudio:ScopedStorage.js" {
/**
 * Interface for safe file system operations within a specified directory
 */
export interface IStorage {
    /** Creates a new file in the storage directory */
    createFile(name: string, content: string | Uint8Array): Editor.Path;
    /** Reads a file as a string */
    readFile(path: Editor.Path | string): string | null;
    /** Reads a file as a byte array */
    readBytes(path: Editor.Path | string): Uint8Array | null;
    /** Unpacks a ZIP archive into the storage directory */
    unpackContent(archivePath: Editor.Path | string): Editor.Path;
    /** Gets the path of the storage directory */
    path: Editor.Path;
}
interface Directory {
    path: Editor.Path;
}
/**
 * Provides safe file system operations within a specified directory.
 * All operations are scoped to the storage directory to prevent unauthorized file access.
 *
 * @example
 * ```typescript
 * // Create storage in a temporary directory
 * const tempStorage = new ScopedStorage();
 *
 * // Create storage in a specific directory
 * const storage = new ScopedStorage('/path/to/directory');
 * ```
 *
 * @example
 * ```typescript
 * // Write and read data
 * const storage = new ScopedStorage();
 * const configPath = storage.createFile('config.json', JSON.stringify({
 *     version: '1.0',
 *     enabled: true
 * }));
 *
 * const configData = storage.readFile(configPath);
 * const config = JSON.parse(configData);
 * ```
 */
export class ScopedStorage implements IStorage {
    directory: Directory;
    /**
     * Creates a new ScopedStorage instance.
     *
     * @param path - Optional base directory path for storage operations. If not provided, a temporary directory is created.
     *
     * @example
     * ```typescript
     * const tempStorage = new ScopedStorage();
     * const customStorage = new ScopedStorage('/path/to/directory');
     * ```
     */
    constructor(path?: Editor.Path | string);
    /** Gets the path of the storage directory */
    get path(): Editor.Path;
    /**
     * Creates a new file in the storage directory.
     *
     * @param fileName - The name of the file to create
     * @param content - The file content as a string or byte array
     * @returns The full path to the created file
     * @throws {Error} If the resolved path is outside the storage directory
     *
     * @example
     * ```typescript
     * const filePath = storage.createFile('config.json', '{"key": "value"}');
     * const imagePath = storage.createFile('image.png', imageBytes);
     * ```
     */
    createFile(fileName: string, content: string | Uint8Array): Editor.Path;
    /**
     * Generic read method that accepts a custom read function.
     * Ensures the file is within the storage directory before reading.
     *
     * @param path - Path to the file (relative to storage directory or absolute)
     * @param readFunction - Custom function to read the file
     * @returns Result of the read function, or null if the file is outside the storage directory
     *
     * @example
     * ```typescript
     * const data = storage.read('/path/to/file', FileSystem.readFile);
     * ```
     */
    private read;
    /**
     * Unpacks a ZIP archive into the storage directory.
     *
     * @param archivePath - Path to the ZIP archive
     * @returns Path to the unpacked directory
     *
     * @example
     * ```typescript
     * const unpackedPath = storage.unpackContent(storage.path.appended(new Editor.Path('archive.zip')));
     * ```
     */
    unpackContent(archivePath: Editor.Path | string): Editor.Path;
    /**
     * Reads a file as a string.
     *
     * @param path - Path to the file (relative to storage directory or absolute)
     * @returns File content as string, or null if the file is outside the storage directory
     *
     * @example
     * ```typescript
     * const content = storage.readFile(storage.path.appended(new Editor.Path('config.json')));
     * const config = JSON.parse(content);
     * ```
     */
    readFile(path: Editor.Path | string): string | null;
    /**
     * Reads a file as a byte array.
     *
     * @param path - Path to the file (relative to storage directory or absolute)
     * @returns File content as Uint8Array, or null if the file is outside the storage directory
     *
     * @example
     * ```typescript
     * const bytes = storage.readBytes(storage.path.appended(new Editor.Path('image.png')));
     * ```
     */
    readBytes(path: Editor.Path | string): Uint8Array | null;
    /**
     * Verifies that a file path is within the storage directory.
     * Prevents directory traversal attacks and unauthorized file access.
     *
     * @param filePath - The file path to verify
     * @returns True if the path is within the storage directory, false otherwise
     */
    private verifyPath;
    /**
     * Converts a string or Editor.Path to Editor.Path.
     *
     * @param path - The path to convert
     * @returns The path as an Editor.Path object
     */
    private deducePath;
}
export {};

}
/**
 * @module LensStudio:Event.js
 */
declare module "LensStudio:Event.js" {
/**
 * A function that handles event notifications.
 * @template T - The type of data passed to the listener. Use void for events without data.
 */
export type EventListener<T = void> = T extends void ? () => void : (data: T) => void;
/**
 * A function that unsubscribes a listener from an event when called.
 */
export type Unsubscribe = () => void;
/**
 * A type-safe event emitter that supports adding, removing, and triggering listeners.
 * Provides functionality for one-time listeners, error handling, and event enabling/disabling.
 *
 * @template T - The type of data passed to event listeners. Defaults to void for events without data.
 *
 * @example
 * // Event without data
 * const onComplete = new Event<void>();
 * onComplete.add(() => console.log('Complete!'));
 * onComplete.trigger();
 *
 * @example
 * // Event with data
 * const onMessage = new Event<string>();
 * onMessage.add((msg) => console.log('Message:', msg));
 * onMessage.trigger('Hello World');
 *
 * @example
 * // One-time listener with unsubscribe
 * const onClick = new Event<{x: number, y: number}>();
 * const unsubscribe = onClick.addOnce((pos) => console.log('Clicked at', pos));
 * // unsubscribe(); // Can manually unsubscribe before first trigger
 */
export class Event<T = void> {
    private listeners;
    private onceListeners;
    private enabled;
    private readonly onError;
    /**
     * Creates a new Event instance.
     * @param onError - Optional error handler for exceptions thrown by listeners.
     *                  If not provided, errors are logged to the console.
     */
    constructor(onError?: (error: unknown) => void);
    /**
     * Adds a listener function to the list of listeners for this event.
     * @param listener - The listener function that processes the event.
     * @returns A function that removes the listener when called.
     */
    add(listener: EventListener<T>): Unsubscribe;
    /**
     * Adds a listener function that will be removed after its first invocation.
     * @param listener - The listener function to invoke only once.
     * @returns A function that removes the listener when called (useful for canceling before first trigger).
     */
    addOnce(listener: EventListener<T>): Unsubscribe;
    /**
     * Removes a specific listener from the list of listeners for this event.
     * @param listener - The listener function to remove.
     */
    remove(listener: EventListener<T>): void;
    /**
     * Removes all listeners and once listeners for this event.
     */
    clear(): void;
    /**
     * Triggers the event, calling all registered listeners in the order they were added.
     * Errors in listeners do not prevent subsequent listeners from being called.
     *
     * @param data - The data to pass to each listener function. Omit for Event<void>.
     *
     * @example
     * // For Event<void>
     * event.trigger();
     *
     * @example
     * // For Event<string>
     * event.trigger("Hello");
     */
    trigger(...args: T extends void ? [] : [data: T]): void;
    /**
     * Disables triggering of the event.
     */
    disable(): void;
    /**
     * Enables triggering of the event.
     */
    enable(): void;
    /**
     * Returns true if the event is enabled.
     * @returns true if the event can be triggered, false if disabled.
     */
    isEnabled(): boolean;
    /**
     * Returns the number of attached listeners.
     * @returns The total count of regular and one-time listeners.
     */
    listenerCount(): number;
    /**
     * Returns true if there are any listeners attached.
     * @returns true if at least one listener is attached, false otherwise.
     */
    hasListeners(): boolean;
    private safeInvoke;
    private static logError;
}

}
/**
 * The following interfaces are returned by various APIs
 * and allows you to bind some callback when `connect` occurs.
*/

/**
 * An interface that allows you to bind a callback on `connect`.
 */
interface signal0<R> {
    connect(callback: () => R) : Editor.ScopedConnection
}

/**
 * An interface that allows you to bind a callback on `connect`.
 */
interface signal1<T0, R> {
    connect(callback: (arg0:T0) => R) : Editor.ScopedConnection
}

/**
 * An interface that allows you to bind a callback on `connect`.
 */
interface signal2<T0,T1, R> {
    connect(callback: (arg0:T0, arg1:T1) => R) : Editor.ScopedConnection
}

/**
 * An interface that allows you to bind a callback on `connect`.
 */
interface signal3<T0,T1,T2, R> {
    connect(callback: (arg0:T0, arg1:T1, arg2:T2) => R) : Editor.ScopedConnection
}

/**
 * An interface that allows you to bind a callback on `connect`.
 */
interface signal4<T0,T1,T2,T3, R> {
    connect(callback: (arg0:T0, arg1:T1, arg2:T2, arg3:T3) => R) : Editor.ScopedConnection
}

/**
 * An interface that allows you to bind a callback on `connect`.
 */
interface signal5<T0,T1,T2,T3,T4, R> {
    connect(callback: (arg0:T0, arg1:T1, arg2:T2, arg3:T3, arg4:T4) => R) : Editor.ScopedConnection
}

/**
 * LensCore provides an environment where `import.meta` is available.
 * This declaration file is needed because it is not a standard part
 * of ES2021. It is included in the `dom` lib, which plugins don't use.
 */
interface ImportMeta {
    resolve(path: string): string
    url: string
}
/**
 * @module LensStudio:AssetUtils.js
 */
declare module "LensStudio:AssetUtils.js" {
export enum ShaderGraphType {
    ShaderGraphImage = 0,
    ShaderGraphUberPbr = 1,
    ShaderGraphUnlit = 2,
    ShaderGraphOccluder = 3,
    ShaderGraphGltf = 4
}
/**
 * Retrieves the resource file absolute path for the specified asset type.
 *
 * @param assetType - The type of the asset, use ShaderGraphType enum.
 * @returns The absolute path of the resource file.
 */
export function getResourceFile(assetType: ShaderGraphType): Editor.Path;
/**
 * Finds or creates an asset in the asset manager.
 *
 * @param assetManager - The asset manager instance.
 * @param assetAbsPath - The absolute path of the asset.
 * @param destDirInProject - The destination directory in the project. this is a relative path to the project Assets root.
 * @returns The primary asset found or created.
 * @throws Error if there is an error importing the asset or if the import result is invalid.
 */
export function findOrCreateNonNativeAsset(assetManager: Editor.Model.AssetManager, assetAbsPath: Editor.Path, destDirInProject: Editor.Path): Promise<Editor.Assets.Asset>;
/**
 * Finds or creates a native asset with the specified name.
 *
 * @param nativeAssetTypeName - The name of the native asset.
 * @param assetManager - The asset manager.
 * @param basename - The base name of the asset.
 * @param destinationDir - the relative path to Assets root in the project, if searching will be limited to this directory,
 * and the asset will be created in this directory if not found. If not provided, the search will be done in the entire
 * project and the creation will be in the root directory.
 * @returns The found or created native asset.
 */
export function findOrCreateNativeAsset(nativeAssetTypeName: string, assetManager: Editor.Model.AssetManager, basename: string, destinationDir?: Editor.Path): Editor.Assets.Asset;
/**
 * Finds an asset in the asset manager based on the specified type, name, and optional parent directory.
 *
 * @param assetManager
 * @param assetType - The type of the asset to find.
 * @param assetName - The name of the asset to find.
 * @param parentDir - (Optional) The parent directory of the asset. If provided, the asset's source path must match this directory.
 * @returns An array of assets that match the specified criteria.
 */
export function findAsset(assetManager: Editor.Model.AssetManager, assetType: string, assetName: string, parentDir?: Editor.Path): Editor.Assets.Asset[];
/**
 * Finds or creates an object tracking texture asset.
 *
 * @param assetManager - The asset manager to search for or create the asset.
 * @param destination - The destination path for the asset.
 * @param type - The type of the object tracking texture.
 * @returns The found or created object tracking texture asset.
 */
export function findOrCreateObjectTrackingTexture(assetManager: Editor.Model.AssetManager, destination: Editor.Path, type: Editor.Assets.ObjectTrackingTextureType): Editor.Assets.Asset;
/**
 * Finds or creates a screen texture asset.
 *
 * @param assetManager - The asset manager to use.
 * @param destination - The destination path for the asset.
 * @returns The screen texture asset.
 */
export function findOrCreateScreenTexture(assetManager: Editor.Model.AssetManager, destination: Editor.Path): Editor.Assets.Asset;
/**
 * Creates a material from a shader graph asset.
 *
 * @param assetManager - The asset manager used to create the material.
 * @param graphType - The type of the shader graph asset.
 * @param materialDir - The directory where the material will be created. Default is an empty string.
 * @param materialName - The name of the material. Default is 'new material'.
 * @param shaderGraphDir - The directory of the shader graph asset. Default is an empty string.
 * @returns An object containing the created material asset, the shader graph asset, and the pass on the material.
 */
export function createMaterialFromGraph(assetManager: Editor.Model.AssetManager, graphType: ShaderGraphType, materialDir?: string, materialName?: string, shaderGraphDir?: string): Promise<{
    material: Editor.Assets.Material;
    shaderGraphAsset: Editor.Assets.Pass;
    passInfo: Editor.Assets.PassInfo;
}>;
/**
 * Adds a pass to the given material and optionally adds define strings to the pass.
 *
 * @param material - The material to which the pass will be added.
 * @param pass - The pass to be added to the material.
 * @param addDefineStrings - An optional array of define strings to be added to the pass. Defaults to ['ENABLE_BASE_TEX'].
 * @returns The pass information after adding the pass and define strings.
 */
export function addGraphToMaterial(material: Editor.Assets.Material, pass: Editor.Assets.Pass, addDefineStrings?: string[]): Editor.Assets.PassInfo;
/**
 * Imports an image as a texture and sets up its wrap mode.
 *
 * @param assetManager
 * @param imageFileAbsolutePath - The absolute path to the image file.
 * @param wrapMode - The wrap mode for the texture. Defaults to `Editor.Assets.WrapMode.ClampToEdge`.
 * @param imageImportDestinationDir - The directory where the image will be imported. Defaults to "Images".
 * @returns An object containing the image asset and texture parameter.
 *
 * @throws Will log an error if the image asset fails to load.
 */
export function importImageAsTexture(assetManager: Editor.Model.AssetManager, imageFileAbsolutePath: string, wrapMode?: Editor.Assets.WrapMode, imageImportDestinationDir?: string): Promise<{
    imageAsset: Editor.Assets.Asset;
    textureParam: Editor.Assets.TextureParameter;
}>;
/**
 * Add a define to the pass info's defines array.
 * @param passInfo - The pass info object to modify.
 * @param define - The define string to add.
 */
export function addDefine(passInfo: Editor.Assets.PassInfo, define: string): void;
/**
 * Set up the wrap mode for a sampler. If only one wrap mode is provided, it's applied to all dimensions.
 * @param sampler - The sampler to modify.
 * @param wrapModeU - The wrap mode for U dimension.
 * @param wrapModeV - The wrap mode for V dimension. If not provided, uses wrapModeU.
 * @param wrapModeW - The wrap mode for W dimension. If not provided, uses wrapModeU.
 * @returns The modified sampler.
 */
export function setupSamplerWrapMode(sampler: Editor.Assets.Sampler, wrapModeU: Editor.Assets.WrapMode, wrapModeV?: Editor.Assets.WrapMode, wrapModeW?: Editor.Assets.WrapMode): Editor.Assets.Sampler;

}
/**
 * @module LensStudio:RemoteMediaModule.js
 */
declare module "LensStudio:RemoteMediaModule.js" {
import { Pixmap, Movie } from "LensStudio:Ui";
interface IStorage {
    createFile(name: string, content: string | Uint8Array): Editor.Path;
    readFile(path: Editor.Path | string): string | null;
    readBytes(path: Editor.Path | string): Uint8Array | null;
    unpackContent(archivePath: Editor.Path | string): Editor.Path;
    path: Editor.Path;
}
/**
 * Static utility class for loading various types of media from URLs.
 * All methods are asynchronous and return Promises.
 *
 * @remarks
 * This module requires:
 * - `LensStudio:Network` - For HTTP requests
 * - `LensStudio:Ui` - For Pixmap and Movie types
 * - `IStorage` from FileSystem module - For file operations (Pixmap/Movie only)
 *
 * ## Usage Patterns
 *
 * **Option 1: Initialize storage once (recommended for multiple media loads)**
 * ```typescript
 * import { RemoteMediaModule } from 'LensStudio:RemoteMediaModule.js';
 * import { ScopedStorage } from 'LensStudio:ScopedStorage.js';
 *
 * // Initialize once at startup
 * RemoteMediaModule.initializeStorage(new ScopedStorage());
 *
 * // Then load media without passing storage each time
 * const config = await RemoteMediaModule.loadAsJson('https://api.example.com/config.json');
 * const pixmap = await RemoteMediaModule.loadAsPixmap(config.imageUrl);
 * const movie = await RemoteMediaModule.loadAsMovie('https://example.com/video.mp4');
 * ```
 *
 * **Option 2: Pass storage per call**
 * ```typescript
 * const storage = new ScopedStorage();
 * const pixmap = await RemoteMediaModule.loadAsPixmap('https://example.com/image.png', storage);
 * ```
 */
export class RemoteMediaModule {
    private static storage?;
    /**
     * Initializes the storage for the RemoteMediaModule.
     * Call this once to set a default storage for all media loading operations.
     * After initialization, storage parameter becomes optional for loadAsPixmap and loadAsMovie.
     *
     * @param storage - The storage instance to use as default for media loading
     *
     * @example
     * ```typescript
     * import { RemoteMediaModule } from 'LensStudio:RemoteMediaModule.js';
     * import { ScopedStorage } from 'LensStudio:ScopedStorage.js';
     *
     * // Initialize once at startup
     * RemoteMediaModule.initializeStorage(new ScopedStorage());
     *
     * // Then use without passing storage
     * const pixmap = await RemoteMediaModule.loadAsPixmap('https://example.com/image.png');
     * ```
     */
    static initializeStorage(storage: IStorage): void;
    /**
     * Loads content from a URL as a string.
     *
     * @param url - The URL to load from
     * @returns Promise resolving to the response body as a string
     * @throws Rejects with the HTTP status code if the request fails
     *
     * @example
     * ```typescript
     * const text = await RemoteMediaModule.loadAsString('https://example.com/data.txt');
     * console.log(text);
     * ```
     */
    static loadAsString(url: string): Promise<string>;
    /**
     * Loads content from a URL as a byte array.
     *
     * @param url - The URL to load from
     * @returns Promise resolving to the response body as a Uint8Array
     * @throws Rejects with the HTTP status code if the request fails
     *
     * @example
     * ```typescript
     * const bytes = await RemoteMediaModule.loadAsBytes('https://example.com/file.bin');
     * ```
     */
    static loadAsBytes(url: string): Promise<Uint8Array>;
    /**
     * Loads and parses JSON content from a URL.
     *
     * @param url - The URL to load from
     * @returns Promise resolving to the parsed JSON object
     * @throws Rejects with the HTTP status code if the request fails, or parsing error if JSON is invalid
     *
     * @example
     * ```typescript
     * const data = await RemoteMediaModule.loadAsJson('https://api.example.com/data.json');
     * console.log(data.someProperty);
     * ```
     */
    static loadAsJson(url: string): Promise<object>;
    /**
     * Loads an image from a URL and creates a Pixmap.
     * The image is downloaded, saved to storage, and then loaded as a Pixmap.
     *
     * @param url - The URL of the image
     * @param storage - Optional storage instance. If not provided, uses the storage from initializeStorage()
     * @returns Promise resolving to a Pixmap object
     * @throws Rejects with the HTTP status code if the request fails, or Error if no storage is available
     *
     * @example
     * ```typescript
     * // Option 1: Pass storage directly
     * const storage = new ScopedStorage();
     * const pixmap = await RemoteMediaModule.loadAsPixmap('https://example.com/image.png', storage);
     *
     * // Option 2: Use initialized storage
     * RemoteMediaModule.initializeStorage(new ScopedStorage());
     * const pixmap = await RemoteMediaModule.loadAsPixmap('https://example.com/image.png');
     * ```
     */
    static loadAsPixmap(url: string, storage?: IStorage): Promise<Pixmap>;
    /**
     * Loads a video from a URL and creates a Movie.
     * The video is downloaded, saved to storage, and then loaded as a Movie.
     *
     * @param url - The URL of the video
     * @param storage - Optional storage instance. If not provided, uses the storage from initializeStorage()
     * @returns Promise resolving to a Movie object
     * @throws Rejects with the HTTP status code if the request fails, or Error if no storage is available
     *
     * @example
     * ```typescript
     * // Option 1: Pass storage directly
     * const storage = new ScopedStorage();
     * const movie = await RemoteMediaModule.loadAsMovie('https://example.com/video.mp4', storage);
     *
     * // Option 2: Use initialized storage
     * RemoteMediaModule.initializeStorage(new ScopedStorage());
     * const movie = await RemoteMediaModule.loadAsMovie('https://example.com/video.mp4');
     * ```
     */
    static loadAsMovie(url: string, storage?: IStorage): Promise<Movie>;
    /**
     * Creates an HTTP GET request for the specified URL.
     *
     * @param url - The URL to request
     * @returns Configured HTTP request object
     */
    private static createRequest;
    /**
     * Extracts the filename from a URL.
     * Removes query parameters and fragments.
     *
     * @param url - The URL to extract the filename from
     * @returns The filename (everything after the last `/`)
     *
     * @example
     * ```typescript
     * // Returns "image.png"
     * getFilename('https://example.com/path/image.png?size=large#preview');
     * ```
     */
    private static getFilename;
}
export {};

}
