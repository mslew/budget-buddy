import Image from "next/image"
interface Props{
    bgColor: string,
    logoPath: string,
    href: string
    children: React.ReactNode
}

export default function FooterButton({bgColor, logoPath, href, children}: Props){
    return(
        <a href={href} target="_blank" className={`${bgColor} flex flex-row flex-shrink-0 gap-4 rounded-lg h-min justify-center items-center border border-black text-white text-sm`}>
            <div className="flex flex-row items-center gap-2">
                <div className="border-r p-2">
                    <Image 
                        src={logoPath}
                        height={"20"}
                        width={"20"}
                        alt={"logo"}
                    />
                </div>
                <p className="w-min whitespace-nowrap p-2 text-sm">{children}</p>
            </div>
        </a>
    )   
}