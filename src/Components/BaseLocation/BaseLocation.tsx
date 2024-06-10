import { memo } from "react";

const BaseLocationIFrame = () => {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14233.110307955465!2d75.7391477!3d26.8946844!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee5fbb7d933b%3A0xd450dbe7d69c52e!2sFPS%20JOBS%20(%20Teaching%20Jobs%20%7C%20Non%20Teaching%20Jobs%20%7C%20Jobs%20in%20education%7C%20IIT%20JEE%20NEET%20JOBS)%20Best%20education%20Job%20Portal%20In%20India!5e0!3m2!1sen!2sin!4v1710332006361!5m2!1sen!2sin"
        width={"100%"}
        height={450}
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
};

export default memo(BaseLocationIFrame);