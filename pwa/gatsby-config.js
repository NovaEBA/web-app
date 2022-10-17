require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/Layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
        excludeOptions: {
          separator: ".",
        },
        autoGenHomeLabel: "Open Catalogi",
        crumbLabelUpdates: [
          {
            pathname: "/components/[componentId]",
            crumbLabel: "Component",
          },
          {
            pathname: "/organizations/[organizationId]",
            crumbLabel: "Organization",
          },
          {
            pathname: "/admin/components/[componentId]",
            crumbLabel: "Component",
          },
          {
            pathname: "/admin/myCatalogi/[myCatalogiId]",
            crumbLabel: "MyCatalogi",
          },
          {
            pathname: "/admin/catalogi/[catalogiId]",
            crumbLabel: "Catalogi",
          },
          {
            pathname: "/admin/sources/[sourceId]",
            crumbLabel: "Source",
          },
          {
            pathname: "/admin/users/[userId]",
            crumbLabel: "User",
          },
        ],
      },
    },
  ],
};
