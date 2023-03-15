import "./styles.scss";

// import {
// 	ViewerApp,
// 	AssetManagerPlugin,
// 	TonemapPlugin,
// 	SSRPlugin,
// 	SSAOPlugin,
// 	BloomPlugin,
// 	AssetManagerBasicPopupPlugin,
// 	CanvasSnipperPlugin,
// } from "webgi";

// async function setupViewer() {
// 	// Initialize the viewer
// 	const viewer = new ViewerApp({
// 		canvas: document.getElementById("webgi-canvas") as HTMLCanvasElement,
// 		useRgbm: false,
// 	});

    
// 	// Add some plugins
// 	const manager = await viewer.addPlugin(AssetManagerPlugin);

// 	// Add plugins individually.
// 	// await viewer.addPlugin(GBufferPlugin)
// 	// await viewer.addPlugin(new ProgressivePlugin(32))
// 	await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm));
// 	// await viewer.addPlugin(GammaCorrectionPlugin)
// 	await viewer.addPlugin(SSRPlugin);
// 	await viewer.addPlugin(SSAOPlugin);
// 	// await viewer.addPlugin(DiamondPlugin)
// 	// await viewer.addPlugin(FrameFadePlugin)
// 	// await viewer.addPlugin(GLTFAnimationPlugin)
// 	// await viewer.addPlugin(GroundPlugin)
// 	await viewer.addPlugin(BloomPlugin);
// 	// await viewer.addPlugin(TemporalAAPlugin)
// 	// await viewer.addPlugin(AnisotropyPlugin)

// 	// or use this to add all main ones at once.

// 	// Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
// 	await viewer.addPlugin(CanvasSnipperPlugin);

// 	// This must be called once after all plugins are added.
// 	viewer.renderer.refreshPipeline();

// 	await manager.addFromPath("./assets/classic-watch.glb");

// 	// Load an environment map if not set in the glb file
// 	// await viewer.scene.setEnvironment(
// 	//     await manager.importer!.importSinglePath<ITexture>(
// 	//         "./assets/environment.hdr"
// 	//     )
// 	// );
// }

// setupViewer();
