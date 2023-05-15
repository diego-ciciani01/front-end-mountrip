declare module '*.md';
declare module '*.svg';
declare module '*.jpg';
declare module '*.png';
declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}
