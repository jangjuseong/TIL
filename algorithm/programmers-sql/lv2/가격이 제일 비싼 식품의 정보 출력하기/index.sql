-- SELECT
--     PRODUCT_ID,
--     PRODUCT_NAME,
--     PRODUCT_CD,
--     CATEGORY,
--     MAX(PRICE) as PRICE
-- FROM
--     FOOD_PRODUCT
-- 위의 코드는 MAX(PRICE)를 반환하지만, 그 최댓값에 해당하는 다른 칼럼들을 출력하지 않으므로 이렇게 작성하면 안됨.
SELECT
  PRODUCT_ID,
  PRODUCT_NAME,
  PRODUCT_CD,
  CATEGORY,
  PRICE
FROM
  FOOD_PRODUCT
WHERE
  PRICE = (
    SELECT
      MAX(PRICE)
    FROM
      FOOD_PRODUCT
  );