// Photo categories. Edit freely: each photo's file name -> list of theme keys.
// A photo can be in several themes. "ai" (AI Art) is ready for new images.
const THEMES=[["food", "Food & drink"], ["people", "People"], ["sights", "Landmarks & history"], ["nature", "Nature & coast"], ["street", "Streets & neighborhoods"], ["art", "Art & murals"], ["shopping", "Markets & shops"], ["night", "After dark"], ["travel", "Getting around"], ["ai", "AI Art"]];
const TAGS={
"IMG_0278.jpg": [
"food",
"people"
],
"IMG_0299.jpg": [
"people"
],
"IMG_0303.jpg": [
"people"
],
"IMG_0308.jpg": [
"shopping"
],
"20261014-LANI_IMG_0075.jpg": [
"people"
],
"IMG_0310.jpg": [
"street",
"night"
],
"IMG_0315.jpg": [
"street"
],
"IMG_0316.jpg": [
"food"
],
"IMG_0329.jpg": [
"people"
],
"IMG_0332.jpg": [
"sights",
"night"
],
"IMG_0334.jpg": [
"street",
"night",
"shopping"
],
"IMG_0346.jpg": [
"street"
],
"IMG_0349.jpg": [
"travel"
],
"IMG_0353.jpg": [
"travel"
],
"IMG_0357.jpg": [
"travel"
],
"IMG_0362.jpg": [
"travel"
],
"IMG_0367.jpg": [
"people",
"travel"
],
"IMG_0369.jpg": [
"nature"
],
"IMG_0373.jpg": [
"art",
"sights"
],
"IMG_0384.jpg": [
"sights"
],
"IMG_0389.jpg": [
"people",
"sights"
],
"IMG_0400.jpg": [
"art"
],
"IMG_0404.jpg": [
"street",
"sights"
],
"IMG_0414.jpg": [
"food"
],
"IMG_0431.jpg": [
"nature"
],
"IMG_0441.jpg": [
"sights"
],
"IMG_0454.jpg": [
"people"
],
"IMG_0525.jpg": [
"sights"
],
"IMG_0530.jpg": [
"people",
"nature"
],
"IMG_0568.jpg": [
"food",
"people"
],
"IMG_0606.jpg": [
"travel"
],
"20261016-LANI_IMG_0190.jpg": [
"sights",
"night"
],
"IMG_0629.jpg": [
"shopping"
],
"IMG_0638.jpg": [
"shopping",
"street"
],
"IMG_0642.jpg": [
"food",
"shopping"
],
"IMG_0664.jpg": [
"shopping"
],
"IMG_0672.jpg": [
"art"
],
"IMG_0701.jpg": [
"art"
],
"IMG_0708.jpg": [
"travel"
],
"IMG_0718.jpg": [
"shopping"
],
"IMG_0723.jpg": [
"sights",
"night"
],
"IMG_0824.jpg": [
"sights",
"night"
],
"IMG_0838.jpg": [
"art",
"sights"
],
"IMG_0839.jpg": [
"sights"
],
"IMG_0840.jpg": [
"nature"
],
"IMG_0854.jpg": [
"food",
"shopping"
],
"IMG_0859.jpg": [
"food",
"shopping"
],
"IMG_0862.jpg": [
"shopping",
"street"
],
"IMG_0870.jpg": [
"nature"
],
"IMG_0880_still.jpg": [
"people",
"shopping"
],
"IMG_0899.jpg": [
"travel"
],
"IMG_0904.jpg": [
"nature"
],
"IMG_0908.jpg": [
"sights"
],
"IMG_0974.jpg": [
"travel"
],
"IMG_1001.jpg": [
"street"
],
"IMG_1004.jpg": [
"art"
],
"IMG_1020.jpg": [
"people"
],
"IMG_1032.jpg": [
"food",
"street"
],
"IMG_1042.jpg": [
"food",
"people"
],
"IMG_1051.jpg": [
"art"
],
"IMG_1055.jpg": [
"travel"
],
"IMG_1058.jpg": [
"street"
],
"IMG_1075.jpg": [
"art",
"sights"
],
"IMG_1079.jpg": [
"street"
],
"IMG_1088.jpg": [
"sights"
],
"IMG_1091.jpg": [
"art"
],
"IMG_1099.jpg": [
"people",
"food",
"art"
],
"IMG_1115.jpg": [
"food"
],
"IMG_1118.jpg": [
"food",
"people"
],
"IMG_1129.jpg": [
"people"
],
"IMG_1140.jpg": [
"art"
],
"IMG_1142.jpg": [
"people",
"street"
],
"IMG_1148.jpg": [
"food",
"street"
],
"IMG_1150.jpg": [
"nature",
"people"
],
"IMG_1155.jpg": [
"people"
],
"IMG_1166.jpg": [
"nature"
],
"IMG_1170.jpg": [
"art"
],
"IMG_1172.jpg": [
"street"
],
"IMG_1179.jpg": [
"travel"
],
"IMG_1181.jpg": [
"people"
],
"IMG_1184.jpg": [
"art"
],
"IMG_1188.jpg": [
"people",
"art"
],
"66f9db0f-image.jpg": [
"people",
"art"
],
"20261019-LANI_IMG_E0629.jpg": [
"sights"
],
"IMG_1208.jpg": [
"food",
"people"
],
"IMG_1232.jpg": [
"shopping",
"night"
],
"IMG_1243.jpg": [
"food"
],
"IMG_1242.jpg": [
"food"
],
"IMG_1248.jpg": [
"travel",
"nature"
],
"IMG_1261.jpg": [
"nature"
],
"IMG_1265.jpg": [
"sights"
],
"IMG_1267.jpg": [
"sights"
],
"IMG_1270.jpg": [
"sights"
],
"IMG_1284.jpg": [
"people",
"nature"
],
"IMG_1293.jpg": [
"nature"
],
"IMG_1299.jpg": [
"people",
"nature"
],
"IMG_1393.jpg": [
"people",
"nature"
],
"IMG_1403.jpg": [
"nature"
],
"IMG_1421.jpg": [
"food"
],
"20261020-LANI_IMG_1089.jpg": [
"nature"
],
"20261020-LANI_IMG_1098.jpg": [
"nature"
],
"IMG_1430.jpg": [
"food",
"people"
],
"IMG_1456.jpg": [
"food",
"people"
],
"IMG_1457.jpg": [
"food",
"people"
],
"IMG_1468.jpg": [
"sights"
],
"IMG_1478.jpg": [
"sights"
],
"IMG_1507.jpg": [
"sights",
"art"
],
"406dc909-image.jpg": [
"nature"
],
"6081903d-image.jpg": [
"food",
"people"
],
"cf2f6c75-image.jpg": [
"food",
"people"
],
"5da2cb02-image.jpg": [
"people",
"food"
],
"75e8fe53-image.jpg": [
"travel"
],
"7bedfc0d-image.jpg": [
"people",
"travel"
],
"1d1969f7-image.jpg": [
"people",
"travel"
],
"dd14a14b-image.jpg": [
"travel"
],
"IMG_1674.jpg": [
"travel"
],
"IMG_1679.jpg": [
"food"
],
"IMG_1680.jpg": [
"food",
"people"
],
"IMG_1686.jpg": [
"art"
],
"20261022-IMG_1706.jpg": [
"art"
],
"20261022-IMG_1733.jpg": [
"art"
],
"IMG_1769.jpg": [
"sights"
],
"20261022-LANI_IMG_E1378.jpg": [
"sights"
],
"IMG_1780.jpg": [
"sights"
],
"20261022-LANI_IMG_1389.jpg": [
"food"
],
"IMG_1787.jpg": [
"food"
],
"IMG_1791.jpg": [
"food",
"people"
],
"IMG_1861.jpg": [
"people",
"sights"
],
"IMG_1914.jpg": [
"sights"
],
"IMG_1923.jpg": [
"street"
],
"IMG_1931.jpg": [
"food",
"street"
],
"20261022-IMG_1933.jpg": [
"street"
],
"IMG_1966.jpg": [
"food"
],
"IMG_1980.jpg": [
"food",
"night"
],
"IMG_1981.jpg": [
"food",
"people"
],
"IMG_1985.jpg": [
"food"
],
"IMG_1998.jpg": [
"street"
],
"IMG_2005.jpg": [
"street",
"food"
],
"IMG_2011.jpg": [
"sights",
"street"
],
"IMG_2026.jpg": [
"sights",
"art"
],
"4e23b73d-image.jpg": [
"people",
"travel"
],
"f81fc110-image.jpg": [
"people",
"travel"
],
"22f604ac-image.jpg": [
"street"
],
"6e4b60ad-image.jpg": [
"shopping",
"street"
],
"9c80a295-image.jpg": [
"art",
"street"
],
"bdcbd794-image.jpg": [
"food",
"shopping"
],
"0c497e11-image.jpg": [
"food",
"shopping"
],
"20261023-LANI_IMG_1723.jpg": [
"art",
"shopping"
],
"20261023-LANI_IMG_1781.jpg": [
"street"
],
"20261023-LANI_IMG_E1800.jpg": [
"street"
],
"20261023-LANI_IMG_1829.jpg": [
"food"
],
"20261024-IMG_2157.jpg": [
"people",
"street"
],
"20261024-LANI_IMG_E1850.jpg": [
"food"
],
"20261024-LANI_IMG_1861.jpg": [
"street",
"sights"
],
"20261024-IMG_2208.jpg": [
"food",
"shopping"
],
"20261024-LANI_IMG_E1894.jpg": [
"food",
"shopping"
],
"20261024-LANI_IMG_E1912.jpg": [
"shopping"
],
"20261024-LANI_IMG_1927.jpg": [
"sights"
],
"20261024-LANI_IMG_1935.jpg": [
"sights",
"nature"
],
"20261024-IMG_2273.jpg": [
"shopping",
"people"
],
"20261024-IMG_2310.jpg": [
"sights"
],
"20261024-IMG_2317.jpg": [
"sights",
"people"
],
"20261024-LANI_IMG_1963.jpg": [
"food",
"shopping"
],
"20261024-LANI_IMG_1982.jpg": [
"shopping"
],
"20261025-IMG_2458.jpg": [
"art",
"shopping"
],
"20261025-IMG_2474.jpg": [
"people"
],
"20261025-LANI_IMG_1994.jpg": [
"art"
],
"20261025-IMG_2500.jpg": [
"travel"
],
"20261025-IMG_2503.jpg": [
"food"
]
};
