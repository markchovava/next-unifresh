
interface pInterface{
   name: string
   css: string
}

export default function StickerDefault({name, css}: pInterface) {
  return (
    <p className={`${css} rounded-full -tracking-wide text-sm bg-white px-2 py-0.5 uppercase`}>
        {name}
    </p>
  )
}
