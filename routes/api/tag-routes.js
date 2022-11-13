const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tags found with that id! '});
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  /* req.body should look like this...
    {
      tag_name: "Black",
      productIds: [1, 4, 5]
    }
  */
  try{
    const tagData = await Tag.create(req.body);
    if (req.body.productIds.length) {
      const productTagIdArr = req.body.productIds.map((product_id) => {
        return {
          product_id,
          tag_id: tagData.id
        };
      })
      const productTagData = await ProductTag.bulkCreate(productTagIdArr);
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      req.status(404).json({ message: 'No tag found with that id!' });
      return;
    };

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    };

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(tagData);
  }
});

module.exports = router;


// SELECT `tag`.`id`, 
//   `tag`.`tag_name`,
//   `products`.`id` AS `products.id`,
//   `products`.`product_name` AS `products.product_name`,
//   `products`.`price` AS `products.price`,
//   `products`.`stock` AS `products.stock`,
//   `products`.`category_id` AS `products.category_id`,
//     `products->product_tag`.`id` AS `products.product_tag.id`, 
//     `products->product_tag`.`product_id` AS `products.product_tag.product_id`, 
//     `products->product_tag`.`tag_id` AS `products.product_tag.tag_id`,
//     `products->product_tag`.`product_id` AS `products.product_tag.productId`,
//     `products->product_tag`.`tag_id` AS `products.product_tag.tagId` 
// FROM `tag` AS `tag` 
// LEFT OUTER JOIN ( `product_tag` AS `products->product_tag` INNER JOIN `product` AS `products` ON `products`.`id` = `products->product_tag`.`product_id`) ON `tag`.`id` = `products->product_tag`.`tag_id` 
// WHERE `tag`.`id` = '1';

