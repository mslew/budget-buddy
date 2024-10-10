import FooterButton from "./footerbutton"

export default function Footer(){
    return(
        <footer className="w-full h-[10%] flex flex-row items-center justify-center pb-4 fixed bottom-0">
            <div className="h-min flex flex-row flex-wrap justify-center gap-2">
                <FooterButton href="https://vercel.com" logoPath="/logos/vercel.png" bgColor="bg-black">Powered By Vercel</FooterButton>
                <FooterButton href="https://firebase.google.com" logoPath="/logos/firebase.png" bgColor="bg-orange-500">Powered By Firebase</FooterButton>
            </div>
        </footer>
    )
}