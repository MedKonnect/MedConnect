import Button from "../ui/button";

const Footer = () => {
  return (
    <footer className="relative flex overflow-clip rounded-tl-2xl rounded-tr-2xl m-0 flex-col h-[96vh] py-20 justify-end">
      <div className="absolute inset-0 bg-[url('/img/footer_bg.webp')] bg-cover bg-no-repeat"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="relative flex flex-col justify-center items-center text-white gap-y-5">
        <h4 className="text-6xl">Your health at your fingertips</h4>
        <p className="mt-2">Access, manage and secure your health records all in one place</p>
        <Button variant="solid" size="lg">Get started</Button>
      </div>
    </footer>
  );
};

export default Footer;