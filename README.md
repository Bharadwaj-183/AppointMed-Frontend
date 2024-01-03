AppointMed is an online doctor appointment booking application developed using MERN stack. It provides the users with oppurtunity to register and book appointment for doctors across various departments within few clicks at their comfort.
It also provides statistics regarding the appointments booked till date and also statistics regarding doctors, their bookings and earnings.
Easy Navigation at top is provided for quick and easy accessibility.

The schema used to store data in database is

{
Username_doctor: String,
accId: String,
doctorEmail: String,
doctorTimezone: String,
bookedServicesData: [{
bookingId: String,
orderId: String,
customerEmail: String,
customerPhoneNumber: String,
customerName: String,
amount: Number,
currency: String,
serviceTitle: String,
serviceCategory: String,
serviceNumber: Number,
isServicePackage: Boolean,
packageValidity: String,
transactionId: String,
isRescheduled: Boolean,
isCancelled: Boolean,
numberOfReschedules: Number,
rescheduledBy: String,
questionObj: [{
question: String,
answer: String
}],
contextQuestion: [{
question: String,
answer: String
}],
transactionStatus: String,
bookingStatus: String,
meetingStartTime: String,
meetingEndTime: String,
date: {
day: Number,
month: String,

weekDay: String
},
customerTimezone: String,
location: {
country: String,
city: String,
state: String
},
isPaymentSuccessful: Boolean,
correlationId: String,
}]
};

The application is live at https://appointmed.netlify.app/

Backend is hosted on vercel and frontend at netlify.
