

const Footer = () => {
    return (
        <div className="w-full bg-[#0B0D17]">
            <div className="w-3/4 mx-auto grid md:grid-cols-2 gap-5  p-10">

                <div className="space-y-3">
                    <img src="https://carspot.scriptsbundle.com/transparent-sidbar/wp-content/uploads/sites/29/2018/04/logo-1.png" alt="" />
                    <p className="text-xl font-medium text-white font-neon">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                    <p className="text-xl font-medium font-neon text-white">Email: <span className="text-red-600">carShop@gmail.com</span></p>
                    <p className="text-xl font-medium font-neon text-white">Phone: <span className="text-red-600">01500 00 00 00</span></p>
                </div>

                <div className="space-y-2">
                    <h1 className="text-2xl font-medium font-neon text-white">Contact With Us</h1>
                    <input className="w-full md:w-3/4 p-2 rounded-lg" placeholder="enter your email" type="email" name="" id="" /><br />
                    <input  className="w-full md:w-3/4 p-2 rounded-lg" placeholder="enter your password" type="password" name="" id="" /><br />
                    <textarea className="textarea w-full md:w-3/4 textarea-bordered" placeholder="Bio"></textarea><br />
                    <button className="btn btn-accent">Send Message</button>
                </div>

            </div>
        </div>
    );
};

export default Footer;