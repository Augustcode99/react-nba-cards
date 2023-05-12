import nbaLogo from "../assets/nba-logo.png";
const Header = () => {
  return (
    <div className="header grid justify-center text-center pt-9">
      <img src={nbaLogo} alt="" />
      <h1 className="text-4xl font-bold pt-2">Hall of Fame</h1>
    </div>
  );
};

export default Header;
