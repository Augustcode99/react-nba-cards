import nbaLogo from "../assets/nba-logo.png";
const Header = () => {
  return (
    <div className="grid justify-center text-center">
      <img src={nbaLogo} alt="" />
      <h1 className="text-3xl font-bold">Hall Of Fame</h1>
    </div>
  );
};

export default Header;
