"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";


const AuthForm = () => {
    const [ variant, setVariant ] = useState<Variant>("LOGIN");
    const [ isLoading, setIsLoading ] = useState(false); 

    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant("REGISTER");
        } else {
            setVariant("LOGIN");
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues> ({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        if (variant === "REGISTER") {
            //axios register
        }

        if (variant === "LOGIN") {
            // nextAuth Sign in
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        // NextAuth social sign in 
    }


    return (
        <div>AuthForm</div>
    )
}

export default AuthForm;