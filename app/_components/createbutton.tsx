interface Props{
    height: string,
    textSize: string,
    children: React.ReactNode
}

export default function CreateButton({height, textSize, children}: Props){
    return (
        <a href="/create" className={`${textSize} flex flex-row items-center p-4 border text-white rounded-3xl w-min whitespace-nowrap bg-slate-500 group`}>
            {children}
            <svg className={`${height} stroke -mr-1 ml-2 mt-0.5 stroke-current stroke-1`} fill="none" viewBox="0 0 10 10" aria-hidden="true"> 
                <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path> 
                <path className="transition group-hover:translate-x-[2px]" d="M1 1l4 4-4 4"></path> 
            </svg>
        </a>
    )
}