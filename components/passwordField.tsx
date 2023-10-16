import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC, SetStateAction, useState } from "react";

interface Props {
  password: string;
  setPassword: (value: SetStateAction<string>) => void;
}

export const PasswordField: FC<Props> = ({
  password,
  setPassword,
}): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className='flex gap-2 items-center'>
      {/* Logic */}
      <input
        value={password}
        type={visible ? "text" : "password"}
        className="border border-gray-300 w-full py-2 pl-4 rounded-lg"
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Enter ANY password'
      />
          <FontAwesomeIcon
            className='h-[25px] text-center hover:h-[30px] duration-300'
            icon={visible ?  "eye-slash" : "eye"}
            onClick={() => setVisible(!visible)}
          />
    </div>
  );
};