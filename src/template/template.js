module.exports = (app) => {
	return `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

		<title>Retro</title>
		<link rel="stylesheet" href="assets/stylesheet/fonts.css">
		<link rel="stylesheet" href="assets/stylesheet/base.css">
		<link rel="stylesheet" href="assets/stylesheet/modal.css">

		<script>
			/* Events */
			const saveEv = new Event('save-file');
		</script>

		<script src="src/ace/ace.js"></script>
		<script src="src/ace/ext-language_tools.js"></script>
		<script src="src/ace/ext-emmet.js"></script>
		<script src="assets/javascript/keymaster.js"></script>
	</head>
	<body>
		<div id="root">${app}</div>
		<div class='presentation'>
			<canvas id='canvas'></canvas>
			<div class='title'>The Retro</div>
			<div class='hint'>Press {enter} to continue</div>
		</div>
		<div class="retro container">
			<section role="topbar" class="topbar"></section>
			<section role="dialog" class="modal">
				<input type="text" class="modal-search" id="modal-search" placeholder="Search for packages....">
				<div class="modal-items">
					<!-- <div class="modal-item active">Package X</div>
					<div class="modal-item">Package X</div>
					<div class="modal-item">Package X</div>
					<div class="modal-item">Package X</div> -->
				</div>
			</section>
			<section role="tabs" class="tabs">
				<!-- <div class="tabs-item">main.js</div> -->
			</section>
			<section role="main" class="main">
				<div id="editor"></div>
			</section>
			<footer>
				<div id="editor-mode" class="normal">normal</div>
				<div id="editor-file" class="normal"></div>
				<div id="editor-syntax" class="normal"></div>
				<div class="loader"></div>
			</footer>
		</div>
		<script async src="dist/retro.js"></script>
	</body>
</html>`
}
