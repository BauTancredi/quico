import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const project = {
  name: "project",
  title: "Project",
  description: "Project Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      description: "Enter the category of the project",
      options: {
        list: [
          { title: "Señaletica", value: "señaletica" },
          { title: "Mobile", value: "mobile" },
          { title: "Desktop", value: "desktop" },
        ],
      },
    },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "images",
      title: "Project Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
      description: "Upload the images for this project",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a description about this project",
      of: [{ type: "block" }],
    },
    {
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      description: "Write a full description about this project",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
