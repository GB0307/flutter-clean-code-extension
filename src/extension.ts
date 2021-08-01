// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { createFeature, initPackages } from './folder_structure';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "flutter-clean-code" is now active!');

	let disposable1 = vscode.commands.registerCommand('extension.initCleanCode', () => {
		vscode.window.showInformationMessage('Initializing folders...');
		initPackages()
	});

	let disposable2 = vscode.commands.registerCommand('extension.createFeature', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInputBox({
			placeHolder: "feature name", 
			prompt: "Enter the name of the new feature"})
			.then((v)=>{
				if(v)
					createFeature(v);
		})
	});

	context.subscriptions.push(disposable1);
	context.subscriptions.push(disposable2);
}

// this method is called when your extension is deactivated
export function deactivate() {}
