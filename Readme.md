# P5ts Starter Project

In this project you can play with the [p5js](p5js.org) library using TypeScript. This library makes it very easy to create and draw on *drawing canvases* on web pages. You can read more about it at p5js.org.

If you use this project as your start, and you use an TypeScript-enabled code editor like [Visual Studio Code](code.visualstudio.com) or [Gitpod](http://www.gitpod.com) you will be able to hover your mouse over the various p5js functions to get some information about them, and you will also get autocomplete and other functionality.

## Trying it out with GitPod

To try out this project with gitpod, you can simply go to your Address Bar up :point_up: there, click inside, and add `gitpod.io/#` BEFORE the address already there. Gitpod will ask you to sign in with a GitHub id (you'll need to register if you haven't) and then it will create a full-fledged environment to play with this code. If everything works as planned, you should get a browser preview to the right automatically, and if you edit and save your code in `index.ts` it should automatically refresh and show your changes. This works by combining two automatic startup tasks: `tsc --watch` will automatically convert Typescript into javascript for you (the .js file is invisible in the code by default) while the `browser-sync` server will give you the website with auto-reload.


If you want to PERMANENTLY SAVE your code, you should use GitHub to *fork* or *duplicate* this repository before you start GitPod. Then you'll be able to use the Source Control fetaures of this editor to *commit* and *push* your code to GitHub, saving it permanently in your own copy of this repository!

### A couple of important notes

I have automated this repository as much as possible, but you may need this information in case things break:

* In case the web preview doesn't load or crashes, you should be able to start it up by trying these settings in order:

  1) Try clicking the "Refresh" button above the preview.
  2) Try running the "gitpod-build-and-serve" task by chooding "Terminal -> Run Task" from the menu.

* Many of the files that make this repository work have been *hidden* in gitpod to keep it as simple-looking for you as possible. They are still there, just invisible. To make them visible for editing (or fixing), you can use "File->Settings->Open Preferences" then choose the "Workspace" tab. There is a setting there that hides the various files from the editor; simply remove the files from that setting or set them to 'false' and they will reappear. The settings that control gitpod are in the `.theia` directory.

## Using VS Code on a local computer instead

Though this repository was really designed to be used in GitPod, you could also download it locally and use it in Visual Studio Code. To get it working, you would need to (1) Install NodeJS and npm, (2) install VS code, (3) use your git tool of choice to clone this repository, (4) run "npm install" in the project folder. You would then be able to use the "build-and-serve" task just as in gitpod to launch a server.

## Useful Links to learn more

[P5js Main Page](http://www.p5js.org)

[P5js documentation](https://p5js.org/reference/)

[P5js Examples](https://p5js.org/examples/)