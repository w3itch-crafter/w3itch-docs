import * as fs from "fs";
import * as path from "path";

const getSidebar = (basePath = path.join(__dirname, "..")) => {
  const sidebar = [];
  const beforePath = process.cwd();
  process.chdir(basePath);

  const parseDir = (dir: string, base = "") => {
    // ignore hidden files
    const files: string[] = fs
      .readdirSync(path.join(basePath, base))
      .filter((sub) => !sub.startsWith("."));

    files.forEach((file) => {
      let sidebarChildren = sidebar;
      base
        .split("/")
        .filter((e) => e)
        .forEach((dir) => {
          sidebarChildren = sidebarChildren.find(
            (e) => e.text === dir
          ).children;
        });

      if (fs.lstatSync(path.join(base, file)).isDirectory()) {
        sidebarChildren.push({
          text: file,
          collapsible: true,
          children: [],
        });
        parseDir(file, path.join(base, file));
      } else {
        sidebarChildren.push({
          text: path.parse(file).name,
          collapsible: true,
          link: path.join(".", base, file),
        });
      }
    });
  };
  parseDir(".");

  process.chdir(beforePath);
  return sidebar;
};

export default getSidebar;
