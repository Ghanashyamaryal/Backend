
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';

const UserSchema = new Schema(
    {
        username: {
            type: string,
            required: true,
            lowercase: true,
            index: true,
            unique: true
        },
        email: {
            type: string,
            required: true,
            lowercase: true,
            unique: true
        },
        fullname: {
            type: string,
            required: true,
            index: true
        },
        avatar: {
            type: string,
            required: true,
        },
        coverImage: {
            type: string,
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: string,
            required: [true, "password is required"]
        },
        refreshToken: {
            type: string
        }
    },
    { timestamps: true })

UserSchema.pre("save", async function (next) {

    if (this.isModified("password")) {

        this.password = await bcrypt.hash(this.password, 10) //to encrypt password
        next();
    }
    else
        next()

})

//to check password correctness

UserSchema.method.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

UserSchema.method.generateAccessToken = function () {
    jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email
        },
        ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
UserSchema.method.generateRefreshToken = function () {
    jwt.sign(
        {
            _id: this._id

        },
        REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )

}



export const User = mongoose.model("User", UserSchema)