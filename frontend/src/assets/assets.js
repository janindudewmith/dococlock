import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_area from './upload_area.png'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    upload_area,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatrician',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Dr. Richard James is a compassionate and experienced General Physician who prioritizes preventive medicine and patient-centered care. With four years of experience in family medicine, Dr. James is dedicated to helping patients achieve their health goals through personalized treatment plans. He has a strong focus on managing chronic conditions, offering health screenings and providing lifestyle counseling. Dr. James believes in fostering long-term relationships with patients, ensuring their well-being is consistently monitored and improved over time.',
        fees: 70,
        address: {
            line1: '234, Willow Lane',
            line2: 'Springfield, IL 62704'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD (Obstetrics and Gynecology)',
        experience: '3 years',
        about: 'Dr. Emily Larson is a dedicated Gynecologist specializing in comprehensive women health. She offers a wide range of services, including prenatal care, contraceptive counseling, and treatment for reproductive system disorders. With a focus on empowering her patients, Dr. Larson ensures that every consultation is informative and tailored to individual needs. Her gentle approach and expertise in obstetrics make her a trusted partner for expectant mothers and women seeking professional gynecological care.',
        fees: 80,
        address: {
            line1: '567, Maple Avenue',
            line2: 'Denver, CO 80203'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. David Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 year',
        about: 'Dr. David Patel is a passionate Dermatologist who specializes in treating a variety of skin conditions, including acne, eczema, and psoriasis. He is also skilled in cosmetic dermatology, offering treatments like chemical peels and laser therapies to enhance skin health and aesthetics. Dr. Patel takes a holistic approach to skincare, emphasizing the importance of lifestyle and nutrition in achieving optimal skin health. His goal is to provide effective solutions while educating his patients about maintaining healthy skin.',
        fees: 50,
        address: {
            line1: '123, Elm Street',
            line2: 'Austin, TX 78701'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS, MD (Pediatrics)',
        experience: '2 years',
        about: 'Dr. Christopher Lee is a dedicated Pediatrician who focuses on providing comprehensive medical care for children from infancy through adolescence. With a warm and approachable demeanor, Dr. Lee ensures that both children and their parents feel comfortable during visits. His expertise includes immunizations, developmental screenings, and the management of common childhood illnesses. Dr. Lee emphasizes preventive care and early intervention, fostering a foundation for lifelong health in his young patients.',
        fees: 60,
        address: {
            line1: '890, Oak Drive',
            line2: 'Seattle, WA 98101'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '4 years',
        about: 'Dr. Jennifer Garcia is an experienced Neurologist with a strong focus on diagnosing and managing complex neurological disorders. Her areas of expertise include migraines, epilepsy, and neurodegenerative diseases such as Alzheimers and Parkinsons. Dr. Garcia employs advanced diagnostic tools and personalized treatment strategies to ensure the best outcomes for her patients. She is deeply committed to providing compassionate care, empowering her patients and their families with knowledge about their conditions.',
        fees: 100,
        address: {
            line1: '345, Pine Road',
            line2: 'Boston, MA 02108'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, MD (Gastroenterology)',
        experience: '4 years',
        about: 'Dr. Andrew Williams is a Gastroenterologist who excels in diagnosing and treating disorders of the digestive system. His expertise includes conditions such as irritable bowel syndrome (IBS), liver diseases, and gastrointestinal cancers. Dr. Williams uses cutting-edge technology to perform minimally invasive procedures like endoscopies and colonoscopies, ensuring patient comfort and accurate diagnoses. He believes in a collaborative approach to care, working closely with his patients to develop effective treatment plans.',
        fees: 90,
        address: {
            line1: '678, Cedar Boulevard',
            line2: 'San Diego, CA 92101'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 years',
        about: 'Dr. Christopher Davis is a trusted General Physician known for his holistic approach to patient care. He specializes in managing chronic conditions such as diabetes and hypertension, along with providing preventive health services. Dr. Davis strongly believes in the importance of patient education and encourages his patients to take an active role in their healthcare journey. His empathetic nature and commitment to excellence make him a valued healthcare provider.',
        fees: 70,
        address: {
            line1: '789, Birch Street',
            line2: 'New York, NY 10001'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS, DO (Obstetrics)',
        experience: '3 years',
        about: 'Dr. Timothy White is a skilled Gynecologist dedicated to providing exceptional care for women health needs. His expertise spans prenatal care, menstrual disorders, and infertility treatments. With three years of experience, Dr. White adopts a patient-centric approach, ensuring every individual feels heard and supported during their visits. He is passionate about creating personalized care plans that align with unique health goals and lifestyles of his patients, fostering a supportive and professional environment.',
        fees: 85,
        address: {
            line1: '456, Walnut Street',
            line2: 'Orlando, FL 32801'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS, DDVL (Dermatology)',
        experience: '1 year',
        about: 'Dr. Ava Mitchell is a Dermatologist with a strong focus on diagnosing and treating a variety of skin, hair, and nail conditions. Her expertise includes managing acne, rosacea, and hyperpigmentation while offering advanced cosmetic procedures such as microneedling and dermal fillers. Dr. Mitchell is committed to staying updated on the latest dermatological advancements to deliver cutting-edge care. She is known for her empathetic approach and strives to boost confidence of her patients by enhancing their skin health.',
        fees: 55,
        address: {
            line1: '912, Spruce Avenue',
            line2: 'Phoenix, AZ 85001'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        speciality: 'Pediatrician',
        degree: 'MBBS, FAAP',
        experience: '2 years',
        about: 'Dr. Jeffrey King is a dedicated Pediatrician who focuses on holistic care for children. His practice includes managing common pediatric illnesses, administering immunizations, and guiding parents through developmental milestones. Dr. King is highly approachable and skilled in handling children of all ages with sensitivity and care. He emphasizes the importance of preventive care and education to ensure a healthy future for his young patients and their families.',
        fees: 65,
        address: {
            line1: '345, Magnolia Court',
            line2: 'Chicago, IL 60601'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '4 years',
        about: 'Dr. Zoe Kelly is a Neurologist renowned for her expertise in treating disorders of the nervous system, including epilepsy, multiple sclerosis, and stroke. With a compassionate and detail-oriented approach, Dr. Kelly provides thorough evaluations and tailors her treatments to meet the unique needs of her patients. She is committed to empowering her patients by explaining complex neurological conditions in an understandable manner, fostering a strong patient-doctor relationship built on trust and communication.',
        fees: 100,
        address: {
            line1: '789, Redwood Drive',
            line2: 'Atlanta, GA 30303'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS, MD (Neurology)',
        experience: '5 years',
        about: 'Dr. Patrick Harris is a seasoned Neurologist with extensive experience in managing conditions such as migraines, seizures, and neurodegenerative diseases. His diagnostic expertise and innovative treatment methods help patients regain their quality of life. Dr. Harris believes in a collaborative approach to care, working closely with other specialists to provide comprehensive solutions. He is passionate about research and continually integrates the latest medical advancements into his practice.',
        fees: 110,
        address: {
            line1: '234, Aspen Lane',
            line2: 'Miami, FL 33101'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General Physician',
        degree: 'MBBS, DNB (Family Medicine)',
        experience: '3 years',
        about: 'Dr. Chloe Evans is a compassionate General Physician with expertise in preventive care, chronic disease management, and patient education. She takes pride in creating individualized care plans that address health concerns of her patients and long-term goals. Dr. Evans is highly skilled in conducting routine checkups, diagnosing illnesses, and guiding her patients toward a healthier lifestyle. Her approachable demeanor and strong communication skills make her a trusted healthcare partner for individuals and families alike.',
        fees: 75,
        address: {
            line1: '567, Birchwood Boulevard',
            line2: 'Dallas, TX 75201'
        }

    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, DGO (Diploma in Gynecology and Obstetrics)',
        experience: '3 years',
        about: 'Dr. Ryan Martinez is a caring and experienced Gynecologist with expertise in handling complex gynecological issues such as PCOS, endometriosis, and pelvic pain. He is also skilled in minimally invasive surgeries and has a keen interest in reproductive health. Dr. Martinez provides a supportive and comfortable environment for his patients, ensuring they are well-informed and empowered to make decisions about their health. He is dedicated to advancing women healthcare through personalized and compassionate care.',
        fees: 85,
        address: {
            line1: '678, Willow Creek Road',
            line2: 'Houston, TX 77001'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '1 year',
        about: 'Dr. Amelia Hill is a Dermatologist committed to enhancing skin health and confidence through comprehensive dermatological care. She is adept at treating conditions like eczema, vitiligo, and skin infections, as well as offering cosmetic procedures to improve skin texture and tone. Dr. Hill takes time to understand concerns of her patients and provides holistic recommendations for skincare regimens. Her patient-first approach ensures that every individual receives the highest standard of care tailored to their specific needs.',
        fees: 45,
        address: {
            line1: '910, Elmwood Avenue',
            line2: 'San Francisco, CA 94101'
        }
    },
]