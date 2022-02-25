export default function Img({ src, width, height }) {
    return (
        <div className={`w-[${width}] h-[${height}] cursor-pointer`}>
            <img src={src} alt={src} />
        </div>
    )
}