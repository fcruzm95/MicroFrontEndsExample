// Use this to load MFE with routes.
// import { loadManifest } from "@angular-architects/module-federation";

// loadManifest("./assets/mf.manifest.json")
//   .catch(err => console.error("Error loading Manifest", err))
//   .then(_ => import('./bootstrap'))
//   .catch(err => console.error("Error Bootstraping", err));
import('./bootstrap')
	.catch(err => console.error(err));
