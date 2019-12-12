declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}

declare module '*.png' {
  const value: any
  export = value
}

declare module '*.svg' {
  const value: any
  export = value
}

declare module 'react-image-file-resizer' {
  const noTypeInfoYet: any
  export = noTypeInfoYet
}
