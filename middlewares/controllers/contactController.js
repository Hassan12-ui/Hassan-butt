import Contact from '../models/contactModel.js';

const contactForm = async (req, res) => {
    
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ message: "Contact Form Submitted Successfully" });
    } catch (error) {
        console.error(error); // Log the error
        return res.status(500).json({ message: "Contact Form is not Submitted" });
    }
};

export const getAllContacts=async(req,res)=>{
    try {
        const contacts=await Contact.find();

        console.log(contacts)
        if(!contacts || contacts.length===0){
            return res.status(404).json({message:"No Contacts Found"});
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error)
    }
}
export default contactForm;
