import { Check, X } from "lucide-react";

const PasswordCriteria = ({ password }) => {
	const criteria = [
		{ label: "≥ 6 characters", met: password.length >= 6 },
		{ label: "UPPERCASE letter", met: /[A-Z]/.test(password) },
		{ label: "lowercase letter", met: /[a-z]/.test(password) },
		{ label: "Digit [0-9]", met: /\d/.test(password) },
		{ label: "Special char [!@#$%]", met: /[^A-Za-z0-9]/.test(password) },
	];

	return (
		<div className='mt-3 space-y-2'>
			<div className='text-xs text-cyan-400 font-mono mb-2'>[PASSWORD_CRITERIA]</div>
			{criteria.map((item) => (
				<div key={item.label} className='flex items-center text-xs font-mono'>
					{item.met ? (
						<div className='relative mr-3'>
							<Check className='size-3 text-green-400' />
							<div className='absolute inset-0 bg-green-400 blur-[1px] opacity-50' />
						</div>
					) : (
						<div className='relative mr-3'>
							<X className='size-3 text-red-400' />
							<div className='absolute inset-0 bg-red-400 blur-[1px] opacity-50' />
						</div>
					)}
					<span className={item.met ? "text-green-400 glow-green" : "text-gray-500"}>
						{item.met ? "[PASS] " : "[FAIL] "}{item.label}
					</span>
					{item.met && (
						<div className='ml-2 text-green-400 animate-pulse'>✓</div>
					)}
				</div>
			))}
		</div>
	);
};

const PasswordStrengthMeter = ({ password }) => {
	const getStrength = (pass) => {
		let strength = 0;
		if (pass.length >= 6) strength++;
		if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
		if (pass.match(/\d/)) strength++;
		if (pass.match(/[^a-zA-Z\d]/)) strength++;
		return strength;
	};

	const strength = getStrength(password);

	const getColor = (strength) => {
		if (strength === 0) return "bg-red-500";
		if (strength === 1) return "bg-red-400";
		if (strength === 2) return "bg-yellow-500";
		if (strength === 3) return "bg-yellow-400";
		return "bg-green-500";
	};

	const getGlowColor = (strength) => {
		if (strength === 0) return "shadow-red-500/50";
		if (strength === 1) return "shadow-red-400/50";
		if (strength === 2) return "shadow-yellow-500/50";
		if (strength === 3) return "shadow-yellow-400/50";
		return "shadow-green-500/50";
	};

	const getStrengthText = (strength) => {
		const texts = [
			{ text: "CRITICAL FAILURE", color: "text-red-400" },
			{ text: "WEAK PROTECTION", color: "text-red-300" },
			{ text: "MODERATE SECURITY", color: "text-yellow-400" },
			{ text: "STRONG DEFENSE", color: "text-yellow-300" },
			{ text: "MAXIMUM SECURITY", color: "text-green-400" }
		];
		return texts[strength];
	};

	const strengthInfo = getStrengthText(strength);

	return (
		<div className='mt-4 p-4 border border-cyan-800/50 bg-black/40 rounded-lg backdrop-blur-sm'>
			{/* Header */}
			<div className='flex justify-between items-center mb-3'>
				<span className='text-xs text-cyan-400 font-mono tracking-wider'>
					[SECURITY_ANALYSIS]
				</span>
				<span className={`text-xs font-mono font-bold ${strengthInfo.color} animate-pulse`}>
					{strengthInfo.text}
				</span>
			</div>

			{/* Strength Bars */}
			<div className='flex space-x-1 mb-4'>
				{[...Array(4)].map((_, index) => (
					<div
						key={index}
						className={`h-2 w-1/4 rounded-full transition-all duration-500 ease-out
							${index < strength ? 
								`${getColor(strength)} ${getGlowColor(strength)} shadow-lg` 
								: "bg-gray-800"
							}
							${index < strength ? 'animate-pulse' : ''}
						`}
					/>
				))}
			</div>

			{/* Progress Percentage */}
			<div className='flex justify-between items-center mb-2'>
				<span className='text-xs text-gray-400 font-mono'>PROGRESS:</span>
				<span className='text-xs text-cyan-300 font-mono'>
					{((strength / 4) * 100).toFixed(0)}%
				</span>
			</div>

			{/* Loading Animation */}
			<div className='w-full bg-gray-800 rounded-full h-1 mb-4'>
				<div 
					className={`h-1 rounded-full transition-all duration-1000 ease-out ${getColor(strength)}`}
					style={{ width: `${(strength / 4) * 100}%` }}
				/>
			</div>

			{/* Criteria */}
			<PasswordCriteria password={password} />

			{/* Footer */}
			<div className='mt-3 pt-3 border-t border-cyan-900/30'>
				<div className='text-xs text-gray-500 font-mono flex justify-between'>
					<span>SYSTEM: AUTH_PROTOCOL</span>
					<span>STATUS: {strength >= 3 ? "SECURE" : "VULNERABLE"}</span>
				</div>
			</div>
		</div>
	);
};

export default PasswordStrengthMeter;