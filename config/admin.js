module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0abef12e386d1ba754f9bf484d6da769'),
  },
});
