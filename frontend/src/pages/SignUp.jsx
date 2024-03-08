import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MdMovie } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { registerUser } from "../service/user.service";

const schema = yup.object().shape({
	email: yup.string().email("Invalid email").required("Can't be empty"),
	password: yup.string().required("Can't be empty"),
	repeatPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Passwords must match")
		.required("Can't be empty"),
});

const SignUp = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		registerUser(data);
		reset();
	};

	console.log(errors);
	return (
		<div className="bg-leanBlue w-screen h-screen text-white flex flex-col justify-center items-center gap-10 p-3">
			<MdMovie className="text-darkRed text-5xl md:text-6xl" />
			<div className="h-3/5 w-11/12 bg-deepBlue rounded-xl flex flex-col justify-evenly md:w-1/2 lg:w-1/4">
				<p className="text-HeadingL px-4 font-light">Sign Up</p>
				<form
					key={"signUpForm"}
					onSubmit={handleSubmit(onSubmit)}
					className="w-full h-3/5 flex flex-col text-BodyM font-light justify-between items-center">
					{["email", "password", "repeatPassword"].map((inpTags, idx) => (
						<div
							key={inpTags + idx}
							className="relative w-11/12 h-10 mx-auto px-2 flex">
							<input
								key={inpTags}
								type={inpTags === "email" ? "email" : "password"}
								{...register(inpTags)}
								className={`w-full h-full bg-transparent focus:outline-none border-b-2 ${
									errors[inpTags] ? "border-red-500" : "border-waikawaGrey"
								} placeholder:text-waikawaGrey caret-darkRed`}
								placeholder={
									inpTags === "email"
										? "Email address"
										: inpTags === "password"
										? "Password"
										: "Repeat Password"
								}
							/>
							{errors[inpTags] && (
								<p
									key={idx}
									className="absolute right-2 bottom-2 text-red-500 text-sm">
									{errors[inpTags].message}
								</p>
							)}
						</div>
					))}
					<button
						type="submit"
						className="bg-darkRed text-white text-center px-3 py-2 w-11/12 mx-auto rounded-md hover:bg-white hover:text-waikawaGrey">
						Create Account
					</button>
				</form>
				<p className="text-center font-light">
					Already have an account ?
					<span
						onClick={() => navigate("/login")}
						className="text-darkRed cursor-pointer px-2">
						Login
					</span>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
