import "./login.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="banner py-1 px-5">
      <div className="flex justify-between ">
        <div className="flex text-white gap-3 ">
          <p>
            <span className="text-sm">ইমেইল</span>: medicalcenter@gmail.com
          </p>
          <p>
            <span className="text-sm">যোগাযোগ</span>: +880170987654
          </p>
        </div>
        <div>
          <button className="btn btn-sm btn-primary text-white">Sign up</button>
        </div>
      </div>
      <div className="flex flex-col my-20">
        <h1 className="text-white text-3xl font-bold">
          ফরিদপুর ইঞ্জিনিয়ারিং কলেজ মেডিকেল সেন্টার
        </h1>
        <div className="flex justify-between mt-8">
          <div className="flex flex-col  w-5/12">
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
                <Link className="text-white text-4xl">
                  <FaFacebook></FaFacebook>
                </Link>
                <Link className="text-white text-4xl">
                  <FaSquareInstagram />
                </Link>
                <Link className="text-white text-4xl">
                  <FaLinkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="card shrink-0 w-full me-20 max-w-sm shadow-2xl bg-blue-700">
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