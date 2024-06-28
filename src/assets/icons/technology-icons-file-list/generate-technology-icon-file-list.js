const path = require('path');
const fs = require('node:fs');

const basePath = path.join(process.cwd(), 'src/assets/icons/technologies');
const outputPath = path.join(process.cwd(), 'src/assets/icons/technology-icons-file-list/file-list.json');

function getDirNames(basePath) {
	return fs.readdirSync(basePath, { withFileTypes: true }).filter(item => item.isDirectory())
		.map(item => item.name);
}

function getDirFilesNames(basePath, dir) {
	const dirPath = path.join(basePath, dir);
	return fs.readdirSync(dirPath, { withFileTypes: true }).filter(item => item.isFile()).map(item => item.name.split('.')[0]);
}

function generateFileList(basePath) {
	const result = {};
	const directories = getDirNames(basePath);

	directories.forEach((dir) => {
		result[dir] = {
			dirName: dir,
			iconsName: getDirFilesNames(basePath, dir)
		}
	})

	return result;
}

const fileList = generateFileList(basePath);

fs.writeFileSync(outputPath, JSON.stringify(fileList, null, 2));