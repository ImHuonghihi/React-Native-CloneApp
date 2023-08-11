import React, { Image, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View, Keyboard } from "react-native";
import { colors, fontSizes, images } from "../constants";
import { useEffect, useState } from "react";
import { isValidEmail, isValidPassword } from '../utilities/Validation';

function Login(props) {
    const [keyboardStatus, setKeyboardStatus] = useState(false)
    const [errorEmail, setErrorEmail] = useState()
    const [errorPassword, setErrorPassword] = useState()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isValidationOK = () => email.length > 0 && password.length > 0 && errorEmail == 0 && errorPassword == 0

    useEffect(()=>{
        Keyboard.addListener("keyboardDidShow", ()=>{
            console.log("keyboard show")
            setKeyboardStatus(true)
        })
        Keyboard.addListener("keyboardDidHide", ()=>{
            setKeyboardStatus(false)
            console.log("keyboard hide")
        })
    })

    return <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
            backgroundColor: "white", flex: 2,
        }}>
        <View style={{
            marginVertical: 50, flex: 1, flexDirection: "row", alignItems: "center",
        }}>
            <Text style={{
                marginHorizontal: 20, width: "50%", color: "black", fontSize: fontSizes.h1, fontWeight: "bold",
            }}>Already have an account?</Text>

            <Image tintColor={colors.primary}
                   source={images.computer}
                   style={{
                       width: 150, height: 150,
                   }} />
        </View>

        <View style={{
            marginVertical: 20, flex: 3,

        }}>
            <Text style={{
                color: colors.primary, fontSize: fontSizes.h4, marginVertical: 10, marginStart: 20,
            }}> Email:
            </Text>
            <TextInput
              onChangeText={(text)=>{
                  //if(!isValidEmail(text) == false){
                  //    setErrorEmail("Invalid email")
                  //} else {
                  //    setEmail(text)
                  //}
                  
                  setErrorEmail(isValidEmail(text) == true ? '' : 'Invalid email')
                  setEmail(text)
                 
              }}
                style={{
                    color: "black",
                }}
                marginHorizontal={20}
                placeholder="example@gmail.com"
                placeholderTextColor={colors.placeholder}
            />
            <Text style={{
                color: 'red', fontSize: fontSizes.h4, marginVertical: 10, marginStart: 20,
            }}>{errorEmail}</Text>
            
            <Text style={{
                color: colors.primary, fontSize: fontSizes.h4, marginVertical: 5, marginStart: 20,
            }}> Password:
            </Text>
            <TextInput
              
                onChangeText={(text)=>{
                    setErrorPassword(isValidPassword(text) == true ? '' : 'Invalid password')
                    setPassword(text)
                }}
                style={{
                    color: "black",
                }}
                secureTextEntry={true}
                marginHorizontal={20}
                placeholder="Enter your password"
                placeholderTextColor={colors.placeholder}
            />
            <Text style={{
                color: 'red', fontSize: fontSizes.h4, marginVertical: 5, marginStart: 20,
            }}>{errorPassword}</Text>


           <View>
                <TouchableOpacity
                  disabled={isValidationOK() == false}
                  onPress={()=>{
                      alert(`email: ${email} \n password: ${password}`)
                  }}
                  style={{
                    backgroundColor: isValidationOK() == true ? colors.primary : colors.inactive,
                    marginHorizontal: 60,
                    marginVertical: 20,
                    marginTop: 60,
                    height: 40,
                    width: "50%",
                    justifyContent: "center",
                    alignSelf: "center",
                    borderRadius: 20,
                }}>
                    <Text style={{
                        color: "white", padding: 10, alignSelf: "center",
                    }}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{
                        color: colors.primary, fontSize: fontSizes.h5,
                        alignSelf: "center",
                    }}>New user? Register Now</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{
            flexDirection: "row", alignItems: "center", marginHorizontal: 20, // marginBottom: 180,
        }}>
            <View style={{ height: 1, backgroundColor: "black", flex: 1 }}></View>
            <Text style={{
                color: "black", fontSize: fontSizes.h5, alignItems: "center", padding: 8,
            }}>Use other method</Text>
            <View style={{ height: 1, backgroundColor: "black", flex: 1 }}></View>
        </View>

        <View style={{
             flex: 2, marginTop: 20,
        }}>
            <View style={{
                flexDirection: "row", justifyContent: "space-around",
            }}>
                <TouchableOpacity >
                    <Text style={{
                        color: "black", fontSize: fontSizes.h5, justifyContent: "center",
                    }}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                        color: "black", fontSize: fontSizes.h5, alignItems: "center",
                    }}>Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAvoidingView>;
}

export default Login;
