export abstract class ProjectDisplayPageModel {
	abstract projectId: number;
	abstract readonly assetsDir: string;
	abstract getAssetUrl(assetName: string): string;
}
