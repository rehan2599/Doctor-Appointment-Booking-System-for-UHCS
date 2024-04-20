import UserSchema from "../models/UserSchema.js";

// Update
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const updatedUser = await UserSchema.findByIdAndUpdate(
            id, 
            {$set: req.body},
            {new: true}
        );

        res.status(200).json({
            success: true,
            message: 'Successfully updated',
            data: updatedUser,
        });
    } catch (err) {
        res.status(500).json({success: false, message: "Failed to update"});
    }
};

// Delete
export const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        await UserSchema.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: 'Successfully deleted'
        });
    } catch (err) {
        res.status(500).json({success: false, message: "Failed to delete"});
    }
};

// Get Single User
export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await UserSchema.findById(id).select('-password');
        
        res.status(200).json({
            success: true,
            message: 'User Found',
            data: user,
        });
    } catch (err) {
        res.status(404).json({success: false, message: "No user found"});
    }
};

// Get All Users
export const getAllUser = async (req, res) => {
    try {
        const users = await UserSchema.find({}).select('-password');
        
        res.status(200).json({
            success: true,
            message: 'Users Found',
            data: users,
        });
    } catch (err) {
        res.status(404).json({success: false, message: "Not found"});
    }
};
