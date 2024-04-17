import TextRotator from "./TextRotator";

const IntroTexts = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-3 lg:space-y-6">
            <h3 className="font-poppins text-5xl max-sm:text-xl">Hello 👋, I'm</h3>
            <h1 className="font-serif text-9xl max-sm:text-6xl ">
                Praweg
            </h1>
            <TextRotator />
        </div>
    );
};
export default IntroTexts;
