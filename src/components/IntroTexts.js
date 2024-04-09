import TextRotator from "./TextRotator";

const IntroTexts = () => {
    return (
        <div className="flex flex-col justify-between items-center space-y-3 lg:space-y-6">
            <h3 className="font-poppins text-5xl max-sm:text-xl">Hello 👋, I'm</h3>
            <h1 className="font-rubik text-9xl name_underline text-primary max-sm:text-6xl ">
                Praweg
            </h1>
            <TextRotator />
        </div>
    );
};
export default IntroTexts;
