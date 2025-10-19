"use client"
import { supabase } from '@/services/supabaseClient'
import { userDetailContext } from '@/context/userDetailContext';
import React, { useContext, useEffect, useState } from 'react'

function Provider({ children }) {

    const [user, setUser] = useState();
    useEffect(() => {
        createNewUser();
    }, [])

    const createNewUser = () => {
        supabase.auth.getUser().then(async ({ data: { user } }) => {
            // check if user already exist

            let { data: Users, error } = await supabase
                .from('Users')
                .select("*")
                .eq('email', user?.email);

            console.log(Users)
            // else create new user
            if (Users?.length == 0) {
                const { data, error } = await supabase.from("Users")
                    .insert([
                        {
                            name: user?.user_metadata?.name,
                            email: user?.email,
                            picture: user?.user_metadata?.picture
                        }
                    ])

                console.log(data);
                setUser(data);
                return;
            }

            setUser(Users[0]);
        })
    }

    return (
        <userDetailContext.Provider value={{ user, setUser }}>
            <div>{children}</div>
        </userDetailContext.Provider>


    )
}

export default Provider

export const UserContext = () => {
    const context = useContext(userDetailContext);
    return context;
}