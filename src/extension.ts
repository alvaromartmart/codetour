import * as vscode from "vscode";
import { registerCommands } from "./commands";
import { registerFileSystemProvider } from "./fileSystem";
import { initializeGitApi } from "./git";
import { registerStatusBar } from "./status";
import {
  endCurrentCodeTour,
  promptForTour,
  startCodeTour
} from "./store/actions";
import { discoverTours } from "./store/provider";
import { registerTreeProvider } from "./tree";
import { registerDecorators } from "./decorator";
import { store } from "./store";

export async function activate(context: vscode.ExtensionContext) {
  registerCommands();

  // If the user has a workspace open, then attempt to discover
  // the tours contained within it and optionally prompt the user.
  if (vscode.workspace.workspaceFolders) {
    const workspaceRoot = vscode.workspace.workspaceFolders[0].uri.toString();
    await discoverTours(workspaceRoot);

    promptForTour(workspaceRoot, context.globalState);

    registerDecorators();

    store.showMarkers = vscode.workspace
      .getConfiguration("codetour")
      .get("showMarkers", true);

    vscode.commands.executeCommand(
      "setContext",
      "codetour:showingMarkers",
      store.showMarkers
    );

    initializeGitApi();
  }

  // Regardless if the user has a workspace open,
  // we still need to register the following items
  // in order to support opening tour files and/or
  // enabling other extensions to start a tour.
  registerTreeProvider(context.extensionPath);
  registerFileSystemProvider();
  registerStatusBar();

  return {
    startTour: startCodeTour,
    endCurrentTour: endCurrentCodeTour
  };
}
