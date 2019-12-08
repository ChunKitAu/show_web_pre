/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	
	//添加html5video  需要添加html5video，clipboard，lineutils，widget，widgetselection 进plugins
	config.extraPlugins= 'html5video';

	//添加onChange插件
	// config.extraPlugins = 'onchange';
	//检测更新的时间间隔  ：5s
	// config.minimumChangeMilliseconds = 100; // 100 milliseconds (default value)

	//toolbar 显示的组件
	config.toolbarGroups = [
			{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
			{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
			{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
			{ name: 'forms', groups: [ 'forms' ] },
			{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
			{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
			{ name: 'links', groups: [ 'links' ] },
			{ name: 'insert', groups: [ 'insert' ] },
			'/',
			{ name: 'styles', groups: [ 'styles' ] },
			{ name: 'colors', groups: [ 'colors' ] },
			{ name: 'tools', groups: [ 'tools' ] },
			{ name: 'others', groups: [ 'others' ] },
			{ name: 'about', groups: [ 'about' ] }
		];
	config.removeButtons = 'Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,ImageButton,TextField,Textarea,HiddenField,Select,Button,Superscript,Subscript,CopyFormatting,RemoveFormat,Blockquote,CreateDiv,BidiLtr,BidiRtl,Language,Anchor,About,ShowBlocks,SpecialChar,Smiley,PageBreak,Iframe';

	//上传图片路径
	config.filebrowserImageUploadUrl  = "http://127.0.0.1:8080/uploadImage";
	//文件上传路径
	// config.filebrowserUploadUrl  = "/uploadImage";
	config.filebrowserHtml5videoUploadUrl = "http://10.0.57.28:8080/uploadVdeio";


	// 配置粘贴的图片的上传路径
	config.uploadUrl="http://127.0.0.1:8080/uploadImage";

	// 添加图片粘贴插件
	config.extraPlugins="imagepaste";




};
