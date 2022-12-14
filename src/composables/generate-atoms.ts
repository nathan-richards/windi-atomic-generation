export function generateKey(key: string) {
  const stripRegex = /[^0-9^a-z^A-Z]/g;

  function create(key: string): string {
    const keyArr = key
      .split(" ")
      .map((x) => strip(x))
      .filter((a) => a);

    return keyArr.join("-");
  }

  function strip(key: string): string {
    return key.replace(stripRegex, "");
  }

  return create(key);
}

/* 
Points to design-tokens.tokens.json
Runs through each object and outputs the theme extend config:
Top level keys to ignore atm:
   - "grid" (tailwind takes care of this primarily)

** Parsing **
Tiers (join each "key" with -)
** any key needs a symbol & whitespace strip

   - color 
      1. "key" - name: prefix-
      2. "key" - name: appendix
      3. value

   - typography
      1. Ignore
      2. "key" - if display .replace(" ","-"), if text .replace("text ","")
      3. Ignore
      4. "fontSize" - if(letterSpacing.value || lineHeight.value > 0) - ['24px': {}] 
      5. letterSpacing - letterSpacing: letterSpacing.value (if not null or 0)
      6. lineHeight - lineHeight: lineHeight.value (if not null or 0)
      
      ** 
      '2xl': ['24px', {
        letterSpacing: '-0.01em',
        lineHeight: '-0.01em',
      }],

      *** Clean up loop to generate base fontWeight, and fontFamily keys & values

   - effect
      - 1. "key" - skip everything but "shadow" (for now)
      - 2. "key" (size)
      - 3. "value" - build shadow prop

   - gradient (look at later)
      1. "key" - name: part1- (prefix)
      2. "key" - name: part-2 (color)
      3. "key" - name: .replace(" ","-").removeSymbols(), e.g 600 -> 500 (90deg) (appendix)
      4. "value" - build value from type, rotation & stops

   - font (custom class build)
      1. "key" skip 
      2. "key" - name: replace(" ", "-")
      3. Is weight
      4. "value" 
         - size (convert to rem) 
         - family
         - weight
         - style
         - spacing
         - lineheight
*/
