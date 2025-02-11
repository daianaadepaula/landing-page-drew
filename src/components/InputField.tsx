interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

const InputField = ({ id, label, type, placeholder, required }:InputFieldProps) => {
	return (
		<div>
			<label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
				{label}
			</label>
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				required={required}
				className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
			/>
  	</div>
	)
}

export default InputField