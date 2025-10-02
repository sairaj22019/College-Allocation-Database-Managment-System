import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

const createCategory = async (req, res) => {
  try {
    const allCats = await prisma.category.createMany({
      data: [
        { category_name: "OPEN" },
        { category_name: "OPEN-FEMALE" },
        { category_name: "OPEN-PWD" },
        { category_name: "OPEN-PWD-FEMALE" },
        { category_name: "EWS" },
        { category_name: "EWS-FEMALE" },
        { category_name: "EWS-PWD" },
        { category_name: "OBC-NCL" },
        { category_name: "OBC-NCL-FEMALE" },
        { category_name: "OBC-NCL-PWD" },
        { category_name: "SC" },
        { category_name: "SC-FEMALE" },
        { category_name: "SC-PWD" },
        { category_name: "ST" },
        { category_name: "ST-FEMALE" },
        { category_name: "ST-PWD" },
      ],
      skipDuplicates: true,
    });
    return res.status(201).json({
      message: "Categories have been inserted in the database successfully!!",
      categories: allCats,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal pointer error haha",
    });
  }
};

export { createCategory };
