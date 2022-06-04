import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Form = () => {
  const [btnActive, setBtnActive] = useState(true);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPass, setInputPass] = useState("");

  useEffect(() => {
    if (inputEmail !== "" && inputPass.length >= 8) {
      setBtnActive(false);
    } else {
      setBtnActive(true);
    }
  }, [inputEmail, inputPass]);

  return (
    <div>
      <FormControl w="40%" mx="auto">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          type="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <FormLabel htmlFor="password">Email password</FormLabel>
        <Input
          id="password"
          type="password"
          value={inputPass}
          onChange={(e) => setInputPass(e.target.value)}
        />
        <Button isDisabled={btnActive}> Ingresar </Button>
      </FormControl>
    </div>
  );
};
export default Form;
