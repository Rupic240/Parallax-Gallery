
const CardTwo = ({ children }) => {
    return (
        <div className="w-full h-auto px-5">
            <p className="text-xl text-white mb-16 max-lg:text-lg">This is where the project description goes. Give an overview or go in depth - what it’s all about, what inspired you, how you created it, or anything else you’d like visitors to know. To add Project descriptions, go to Manage Projects.</p>
            <div className="grid gap-10">
                {children}
            </div>
        </div>
    )
}

export default CardTwo;