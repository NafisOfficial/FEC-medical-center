import "./login.css";
import { Link } from "react-router-dom";
import icon1 from '../../../assets/images/icons/facebook.png'
import icon2 from '../../../assets/images/icons/twitter.png'
import icon3 from '../../../assets/images/icons/linkedin.png'

const Login = () => {
  return (
    <div className="banner py-1 px-24">
      <div className="flex justify-between">
        <div className="flex text-white gap-3 ">
          <p>
            <span className="text-sm">ইমেইল</span>: medicalcenter@gmail.com
          </p>
          <p>
            <span className="text-sm">যোগাযোগ</span>: +880170987654
          </p>
        </div>
        <div>
          <button className="btn btn-sm border-none hover:bg-[#301dd8] bg-[#1D4ED8] text-white">Sign up</button>
        </div>
      </div>
      <div className="flex flex-col my-20">
        <h1 className="text-white text-3xl font-bold">
          ফরিদপুর ইঞ্জিনিয়ারিং কলেজ মেডিকেল সেন্টার
        </h1>
        <div className="flex justify-between mt-8">
          <div className="flex flex-col justify-between  w-5/12">
            <div className="text-white text-justify font-mono ">
              ফরিদপুর ইঞ্জিনিয়ারিং কলেজ বাংলাদেশের সনামধন্য একটি প্রতিষ্ঠান ।
              এটি ফরিদপুর জেলার প্রাণকেন্দ্রে অবস্থিত । এই কলেজ ফরিদপুর শহরের
              প্রাণ কেন্দ্রে অবস্থিত । ফরিদপুর ইঞ্জিনিয়ারিং কলেজ মেডিকেল সেন্টার
              এই কলেজের একটি আংশিক প্রতিষ্ঠান । এই প্রতিষ্ঠানটি কলেজ
              শিক্ষার্থীদের পাশাপাশি ফরিদপুর শহরের লোকদের বিশেষজ্ঞ চিকিৎসা সেবা
              প্রদান করে থাকে ।
            </div>
            <div className="my-10">
              <p className="text-white mb-2">আমাদের সাথে সংযুক্ত থাকুন :</p>
              <div className="flex gap-5">
                <Link target="_blank" to="www.facebook.com">
                  <img className="h-10 w-10" src={icon1} alt="" />
                </Link>
                <Link target="_blank" to='www.instragram.com'>
                  <img className="h-10 w-10" src={icon2} alt="" />
                </Link>
                <Link target="_blank" to="www.linkedin.com">
                  <img className="h-10 w-10" src={icon3} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="card shrink-0 w-full  max-w-sm shadow-2xl bg-blue-700">
            <h1 className="text-center text-white text-4xl mt-5 font-bold ">Login</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input bg-transparent text-white input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input bg-transparent text-white input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
