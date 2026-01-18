// ACT Strategy Guides and Resources
// Content derived from Dr. Krupnick's ACT Systems & Strategies

export const resourceCategories = [
  { id: 'english', label: 'English', color: 'bg-primary/20' },
  { id: 'math', label: 'Math', color: 'bg-lavender/20' },
  { id: 'reading', label: 'Reading', color: 'bg-bronze/30' },
  { id: 'science', label: 'Science', color: 'bg-rosewood/20' },
  { id: 'general', label: 'General', color: 'bg-coral/20' },
];

export const resources = [
  // ============================================
  // ENGLISH RESOURCES
  // ============================================
  {
    id: 'comma-rules',
    title: 'Comma Rules & Punctuation',
    section: 'english',
    duration: 15,
    difficulty: 'essential',
    description: 'Master the essential comma rules tested on the ACT, including the D&I test, bracket test, and FANBOYS.',
    content: `# Comma Rules & Punctuation Guide

## How to Recognize Comma Questions
1. **Prompt**: Look for "Which choice makes the sentence most grammatically acceptable"
2. **Conceptual**: Look for anything with punctuation (commas, periods, semicolons, etc.) in the underlined portion

## The Order of Operations for Punctuation
When approaching punctuation questions, try answers in this order:
1. **Period** (separates two independent clauses)
2. **Semicolon** (separates two independent clauses)
3. **Dash** (can separate I-D)
4. **Commas** (most to least)
5. **Colon** (can follow independent clause)
6. **No punctuation**

---

## The Four Essential Comma Tests

### 1. The D&I (Dependent/Independent) Test
If a comma separates a dependent and independent clause, **keep the comma**. If a comma separates two dependents or two independents, **no comma** (unless FANBOYS).

**Example**: "Although I went to the store, I didn't buy anything."
- "Although I went to the store" = dependent clause
- "I didn't buy anything" = independent clause
- ✓ Comma is correct

**Common Dependent Clause Starters (WABBITS)**:
- **W**: While, When, Whereas
- **A**: After, Although, As, At
- **B**: Before, Because
- **B**: (part of pattern)
- **I**: If, In
- **T**: Though
- **S**: Since

**Tip**: If you can put "It is" or "They are" at the beginning of a clause, it's usually dependent.

### 2. The Bracket Test
If the expression between two commas can be eliminated and the sentence still makes sense, then **keep both commas**.

**Example**: "The best player on the '86 Red Sox, who was also the best player in the entire league, was Wade Boggs."
- Remove bracketed phrase: "The best player on the '86 Red Sox was Wade Boggs." ✓
- The sentence still works, so keep both commas.

### 3. The Adjective List Test
If commas are between adjectives, apply the **And/Reverse Test**:
- Can you replace the comma with "and"?
- Can you reverse the adjectives with no loss of meaning?

If yes to both, **keep the comma**.

**Example**: "We love the big, friendly giant."
- "The big and friendly giant" ✓
- "The friendly, big giant" ✓
- Keep the comma!

### 4. The FANBOYS Test
The **only** situation where you can have a comma between two independent clauses is with FANBOYS:
- **F**or
- **A**nd
- **N**or
- **B**ut
- **O**r
- **Y**et
- **S**o

**Example**: "I went to the store, and I bought some groceries."

---

## Punctuation Rules Chart

| Condition | Period | Semicolon | Dash | D&I Comma | FANBOYS Comma | Colon |
|-----------|--------|-----------|------|-----------|---------------|-------|
| I-I (Independent-Independent) | ✓ | ✓ | | | ✓ | ✓ |
| D-I (Dependent-Independent) | | | | ✓ | | |
| I-D (Independent-Dependent) | | | ✓ | ✓ | | ✓ |
| D-D (Dependent-Dependent) | | | | | | |

---

## Magic Tricks & Shortcuts

### The Dash Rule
If you have one dash in the sentence and they offer you a dash in the answer, **take it**.

### Sundry Rules
1. Two dashes = two commas = two parentheses
2. Semicolons = periods (both separate two independent clauses)
3. In a head-to-head match-up, always choose **colon over semicolon**
4. **Never** put a D&I comma or opening bracket before a preposition
5. For Title/Name situations, use the bracket rule + the "Pronoun/Noun and A" rule

---

## Common Comma Errors to Avoid

### Comma Splices
Two independent clauses joined only by a comma = **ALWAYS WRONG**

**Wrong**: "I went to the store, I bought milk."
**Right**: "I went to the store, and I bought milk." (FANBOYS)
**Right**: "I went to the store; I bought milk." (Semicolon)

### Unnecessary Commas
Don't use commas to separate essential information that defines what you're talking about.

**Wrong**: "The book, that I read, was great."
**Right**: "The book that I read was great."
`,
  },
  {
    id: 'agreement-rules',
    title: 'Agreement Rules',
    section: 'english',
    duration: 12,
    difficulty: 'essential',
    description: 'Learn subject-verb agreement, pronoun agreement, and modifier rules for ACT English.',
    content: `# Agreement Rules Guide

## How to Recognize Agreement Questions
1. **Prompt**: Look for "Which choice makes the sentence most grammatically acceptable"
2. **Conceptual**: Look for modifiers, tense, singular/plural, pronoun agreement, apostrophes, or Who vs. Whom

## Approach
Look in the sentence, sentence above, and sentence below for **consistency**.

---

## Subject-Verb Agreement

### The Agreement Test
Beware of **buried subjects** and **noun/verb reversals**.

**Example**: "The summit of the highest mountains **is** beautiful."
- Subject: summit (singular)
- Verb: is (singular) ✓

**Example**: "The flashiest director in the movies, say critics, **is** Darren Aronofsky."
- Subject: director (singular)
- Verb: is (singular) ✓

### The 3 and 1 Rule (Magic Trick)
If you have verbs in the answer and something with an "s" and something without an "s":
- **3 singular answers + 1 plural answer** = Answer is plural
- **3 plural answers + 1 singular answer** = Answer is singular

**Test**: If you can say "She," it's singular. If you can say "They," it's plural.
- She wants (singular)
- They want (plural)

---

## Pronoun Agreement

### General Rule
Make pronouns consistent with the nearest noun before the pronoun. Always test!

### Name Noun vs. Pronoun Rule
**Always choose the name noun over the pronoun.**
- Choose "Jim" over "him"
- Choose "the surface of the fabric" over "its surface"
- Choose "Hindi Cinema" over "its cinema"

### Pronouns and Contractions
| Word | Meaning |
|------|---------|
| It's | It is |
| Its | Possessive |
| Its' | DOESN'T EXIST |
| Who's | Who is |
| Whose | Possessive |

---

## Who vs. Whom (Magic Trick)

**Simple Rule**:
- **Who** goes before verbs
- **Whom** goes before nouns
- When in doubt, **choose Who over Whom**

---

## Modifier Rules

### How to Recognize
The underline is usually at the **beginning of a sentence** or **after a comma** in a D-I phrase.

### The Rule
The first word of the independent clause must refer to the first words of the dependent clause.

**Example**: "Trying to escape, the prisoner dug through the wall."
- Who is trying to escape? The prisoner. ✓

**Wrong**: "Trying to escape, the wall was dug through by the prisoner."
- The wall is not trying to escape!

---

## Apostrophe Rules

### When to Use Apostrophes
If you can replace the word with "my" or "their," it deserves an apostrophe.

**Example**: "Rilke's poetry" = "my poetry" ✓

### Possession Rules
- Possession apostrophes precede nouns or adjectives then nouns
- Otherwise, no apostrophe

### Singular vs. Plural Possession
- **Singular**: 's (My friend's house)
- **Plural**: s' (My friends' houses)

---

## Commonly Confused Words

### Affect vs. Effect
- **Affect** = verb ("How does inflation affect stock prices?")
- **Effect** = noun ("The effect of inflation on stock prices...")

### Than vs. Then
- **Than** = comparing things ("They had more eggs than we did.")
- **Then** = time or following "if" ("We went to the movies; then, we went home.")

### Passed vs. Past
- **Passed** = verb, past tense of "pass" ("She passed the test.")
- **Past** = not a verb, something behind you ("We walked past the garbage can.")

### Began vs. Begun
- We **began**. We **had begun**.
- We drank. We had drunk.
- We sank. We had sunk.

### Cite vs. Site vs. Sight
- **Cite** = verb, to reference ("To cite a source")
- **Site** = a place ("The site of my birthday party")
- **Sight** = ability to see ("I noticed him by sight")

---

## Tense Consistency
Make verbs consistent with the tense of the closest verbs in the passage.
`,
  },
  {
    id: 'economy-redundancy',
    title: 'Economy & Redundancy',
    section: 'english',
    duration: 8,
    difficulty: 'essential',
    description: 'Learn the economy rule: shorter is usually better on the ACT.',
    content: `# Economy & Redundancy Guide

## How to Recognize Redundancy Questions
1. **Prompt**: Look for "Which choice is least redundant in context?"
2. **Conceptual**: If there are redundancies in **any** of the answers, it's a redundancy/economy question

---

## The Economy Rule (Magic Trick)

**This entire category is a magic trick!**

As soon as you see that the question uses the word "redundancy," **go to the shortest answer**.

As long as the shortest answer meets the rules of **agreement** and **clarity**, it is correct.

---

## The Economy Test

The shortest answer will be right as long as:
1. It satisfies the rules of **agreement**
2. It is **clear**
3. It is **simple and formal**

If the shortest answer does NOT meet one of these rules, go to the next shortest answer—and keep going if necessary.

---

## Common Traps

### 1. Agreement Trap
Sometimes the shortest answer has an agreement error. Check for:
- Subject-verb agreement
- Pronoun agreement
- Tense consistency

### 2. Clarity Trap
Usually involves the **Name Noun/Pronoun Rule**:
- If you have to choose between a name noun and a pronoun, **always choose the name noun**
- "Jim" over "him"
- "The surface of the fabric" over "the surface of it"

**Remember**: Repetition is NOT always redundancy!

---

## Sundry Rules

### 1. Name Noun Over Pronoun
If you must choose between name noun and pronoun, always choose name noun. It doesn't matter how many times "Jim" has been repeated—choose "Jim" over "him."

### 2. Rule of Specificity
Longer answers that are **more descriptive** (and non-redundant) are better than shorter, less descriptive answers.

### 3. General Rule of Economy
Best answers are shorter **AS LONG AS** they are:
- Clear
- Simple/formal
- Meet rules of agreement

---

## Examples of Redundancy

### Redundant (Wrong)
- "knowledge that they possess and know" (possess and know = same thing)
- "knowledge of local plants in the area" (local = in the area)
- "in my personal opinion" (opinions are personal by definition)
- "completely destroyed" (destroyed is already complete)
- "past history" (history is the past)
- "advance planning" (planning is done in advance)

### Concise (Correct)
- "knowledge of local plants"
- "in my opinion"
- "destroyed"
- "history"
- "planning"

---

## Quick Strategy

1. See "redundancy" in the question? → Go to shortest answer
2. Check: Does it have agreement errors? → If yes, next shortest
3. Check: Is it clear? → If no, next shortest
4. Check: Is it formal? → If no, next shortest
5. If all checks pass → That's your answer!
`,
  },
  {
    id: 'transitions',
    title: 'Transition Words',
    section: 'english',
    duration: 10,
    difficulty: 'essential',
    description: 'Master transition words and phrases for logical flow in ACT English passages.',
    content: `# Transition Words Guide

## How to Recognize Transition Questions
1. **Prompt**: Look for "Which transition word or phrase makes the sentence most logical in context"
2. **Conceptual**: Look for words like "furthermore," "however," "moreover," "instead," "so," "indeed," "thus," "therefore," "for instance," "for example," "nevertheless," and "in fact"

**Note**: A transition word is always followed by a comma and is found:
- At the beginning of the sentence (as intro words)
- In the middle of the sentence with bracket commas
- At the end of the sentence

---

## Approach: Positive/Negative Context

Read the **previous sentence** and the **current sentence**.

### If sentences AGREE:
Use a positive transition word:
- In fact
- Thus
- For example
- Moreover
- Furthermore

### If sentences DISAGREE:
Use a negative transition word:
- However
- Instead
- Nevertheless
- On the other hand

---

## Transition Magic Trick

**Look for**: "Which transition word or phrase, **if any**, is most logical in context?"

**If there's an option to delete all the transition words, you can always delete.**

---

## Transition Word Groups

### Words That Mean the Same Thing

| Contrast | Addition | Cause-Effect | Example |
|----------|----------|--------------|---------|
| However | Moreover | Hence | For example |
| Nevertheless | Furthermore | Thus | For instance |
| Still | What's More | Therefore | |
| | Likewise | Consequently | |
| | Additionally | As a result | |
| | Also | | |

---

## Transition Words: Likely to Be RIGHT

- However
- For example / For instance
- So
- Eventually
- Then
- Finally
- Instead
- In addition
- Indeed
- First
- Accordingly
- Moreover
- Still
- To this end (on SAT)

---

## Transition Words: Likely to Be WRONG

- As a matter of fact
- As it turns out
- Be that as it may
- Coincidentally
- Besides
- At once
- Well
- Of course
- In other words
- As always
- By now
- Namely
- Ordinarily
- Instantly
- Otherwise
- In view of the foregoing
- As a rule
- As the case may be
- Meanwhile
- In sum

---

## Transition Words by Sentence Flow

| Transition | Flow Direction |
|------------|----------------|
| For example | More specific |
| For instance | More specific |
| In fact | More specific |
| Therefore | More general |
| Hence | More general |
| Thus | More general |
| Furthermore | Same level |
| Similarly | Same level |
| Likewise | Same level |
| In addition | Same level |
| Also | Same level |
| Moreover | Same level |

---

## Transition Words by Position

| Position | Transitions |
|----------|-------------|
| Beginning | Similarly, Furthermore, In addition, Moreover, Nevertheless, Nonetheless, Indeed, Although, Additionally, Rather |
| Middle | However (80% of the time if in middle), Though |
| Beginning or Middle | For example |
| End | Though |

---

## Quick Strategy

1. Read sentence before and current sentence
2. Do they agree or disagree?
3. If agree → positive transition (In fact, Thus, For example)
4. If disagree → negative transition (However, Instead, Nevertheless)
5. If "if any" option exists → consider deleting
`,
  },
  {
    id: 'emq-cmq',
    title: 'Edit & Comment for Meaning',
    section: 'english',
    duration: 12,
    difficulty: 'intermediate',
    description: 'Learn to tackle EMQs (Edit for Meaning Questions) and CMQs (Comment for Meaning Questions).',
    content: `# Edit for Meaning (EMQ) & Comment for Meaning (CMQ) Guide

## Edit for Meaning Questions (EMQs)

### A. Key Word EMQs (Textual)

**Recognize**: Look for a textual edit prompt in front of the question and edit in answers. Look for adjectives and adverbs like "most descriptive," "most specific," "most precise," "new," "different," etc.

**Approach**: Read the sentence carefully. Sometimes read the sentence before or after. Substitute answers in. Answer the question—do NOT worry about commas, agreement, economy. Just follow instructions.

**Test**: The correct answer is very often the one that is **most specific and strongest** in language.

### B. Location EMQs (Textual)

**Recognize**: The prompt is about improving one part of the text by referencing another part.

**Approach**:
| Question Type | What to Read |
|---------------|--------------|
| Best Introduction | Next sentence |
| Best Conclusion | Previous sentence |
| Most Relevant | Previous AND next sentence |
| Best Conclusion to Passage | Title, intro, and previous sentence |
| Best Transition From | Previous sentence |
| Best Transition To | Next sentence |
| Best Transition From AND To | Previous AND next sentence |

**Test**: Look for the answer that is the **closest synonym** to the sentence(s) you just read. Use process of elimination.

### C. NOT/EXCEPT EMQs

**Recognize**: "NOT" or "EXCEPT" will be in ALL CAPS. If you don't see it, you can still recognize it if more than one answer seems correct.

**Approach/Test**:
- The correct answer will usually be the one that **doesn't look like the other three**
- **95%** of NOT/EXCEPT questions are Comma questions in disguise
- **70%** have two independent clauses separated by a comma as the correct answer

---

## Comment for Meaning Questions (CMQs)

### A. Yes/No Explanation Questions

**Recognize**: Long answers. CMQs are about the whole paragraph or whole passage. Often phrased as:
- "The writer is thinking about adding/deleting the following. Should she?"
- "A good conclusion that reiterates the main point would be..."
- "This passage is about X. Yes/No and why?"

**Approach**:
- For whole passage questions: Re-read the **passage title, introduction, and conclusion**
- For whole paragraph questions: Read **current paragraph** and **last sentence of previous paragraph** and **first sentence of next paragraph**

**Test**:
1. Start with the **explanation first**
2. Only after you've done POE for explanation, go to Yes/No
3. Two answers will usually be **internally inconsistent** (wrong because they don't answer the question)

### B. "If the Writer Were to Delete" Questions

**Recognize**: "If the writer were to delete the previous sentence, the paragraph/passage would lose..."

**Approach/Test**:
- The answer is most likely a **summary of the information** in the deleted text
- Answer is UNLIKELY to be "deleting it won't change the meaning"
- These questions rarely ask about sentences that should be deleted

**Strategy**: Read context WITH the sentence and WITHOUT the sentence. Observe the difference.

### C. Sequence Questions

**Recognize**: "Sentence Five would best be placed...after sentence 2, before sentence 1, where it is now, after sentence 4."

**Approach**: The most important words are:
- **Articles** (a, an, the)
- **Pronouns** (he, she, it, they)
- **Context words**
- **Repetitions**

**Example**: "He did not bend the rules, after all."
- "He" → Who is "he"? Previous sentence should introduce him
- "the rules" → What rules? Previous sentence should mention rules
- "after all" → Previous sentence should suggest he was considering breaking rules

**Test**: Plug the sentence into Answer A first. Look for:
- Repeated noun words
- Nouns that explain pronouns
- Contextual words

Often, the giveaway is a **noun at the end of one sentence** and **the same noun at the beginning of the next**.

### D. "The Writer is Considering Adding" Questions

**Magic Trick**:
- If adding a **full sentence** → Answer is almost always **"No"**
- If adding **part of a sentence** → Answer is almost always **"Yes"**

### E. "The Writer is Considering Revising" Questions

**Magic Trick**:
- If revision makes sentence **more specific** → "Yes"
- If revision makes sentence **less specific** → "No"

### F. Main Idea Questions

**Approach**:
- For whole passage: Read title, intro, last sentence of intro, and conclusion
- Pay attention to the **grammatical subject** of sentence(s)—it tells you what/whom the excerpt is about
`,
  },

  // ============================================
  // READING RESOURCES
  // ============================================
  {
    id: 'reading-strategies',
    title: 'Reading Strategies Overview',
    section: 'reading',
    duration: 15,
    difficulty: 'essential',
    description: 'The Krupnick Approach to ACT Reading: General > Specific, Positive > Negative, Moderate > Extreme.',
    content: `# ACT Reading: The Krupnick Approach

## Core Principles

### General > Specific
When in doubt, choose the more general answer over the overly specific one.

### Positive > Negative
Prefer positive interpretations unless the passage is clearly negative.

### Moderate > Extreme
Avoid extreme language. The ACT prefers moderate, balanced answers.

---

## Reading Methods (Choose Your Approach)

### Method 1: Line Numbers First (Recommended)
1. Do line number questions first
2. Then do other questions looking for keywords
3. Do NOT read the entire passage first

### Method 2: Skim + Line Numbers
1. Skim the passage quickly
2. Do line number questions first
3. Return to passage for other questions

### Method 3: Line Numbers → Skim → Others
1. Do line number questions
2. Then skim the passage
3. Then answer remaining questions

### Method 4: Traditional
Read thoroughly and answer questions sequentially (only for very strong readers)

---

## What to Look For When Reading

1. **Main idea/purpose** - What is this passage about?
2. **Point of view** - Who/what is being talked about?
3. **Characters and quotations** - Who said what?
4. **Technical terms** - Specialized vocabulary
5. **Tone** - Is it positive or negative?
6. **Argument vs. Description** - Is the author making a point or just describing?
7. **Title/Background** - ALWAYS read these!

---

## Question Types

### A. Content Categories

#### 1. Detail Questions (Explicit)
- Answer is directly stated in the passage
- Look for exact words or paraphrases

#### 2. Inference Questions (Implicit)
- Answer is implied, not stated
- Uses words like "infer," "imply," "suggests"
- Still must be supported by text!

#### 3. Purpose Questions
- About the author's intent
- Often has a very general answer
- Ask: "Why did the author write this?"

#### 4. Main Idea Questions
- (Re)read Title, intro, conclusion
- Look for recurring themes

### B. Method Categories

#### 1. Line Number Questions
- The question gives you specific line numbers
- Go directly to those lines
- Read a few lines before and after

#### 2. Keyword Questions
- Contains a number or rare capitalized word
- Search for that specific term in the passage
- Rare capital letters appear only once or twice

#### 3. Non-Keyword Questions
- Usually main idea or open-ended
- Try to remember where topic appeared
- Use topic sentences (first sentence of paragraphs)

---

## Traps and Answer Patterns

### A. One-Word Answer Trap
Watch for one word (or a few words) that throws off an otherwise correct answer. Two answers seem close? Check for that one wrong word.

### B. Same-Word Trap
Just because an answer uses the same word as the passage doesn't mean it's correct!

### C. Part/Whole Trap
The answer is either:
- Too general (whole instead of part)
- Too specific (part instead of whole)

### D. Positive/Negative Trap
You get the wrong valence—chose negative when it should be positive, or vice versa.

### E. Rule of Inclusivity
A more inclusive answer that covers more ground is often better.

### F. Describe vs. Prescribe Trap
- **Describe** = explain what IS
- **Prescribe** = explain what SHOULD BE
Make sure you know which one the passage is doing!

### G. Opposite Trap
The answer is the exact opposite of what the passage says.

### H. Extreme Answers
**Avoid extreme language!**
- Words like "always," "never," "all," "none," "completely"
- ACT prefers moderate, qualified language

---

## Categories of Reading Answers

When comparing answer choices, consider:

1. **Subject** - Who or what is being talked about?
2. **Singular/Plural** - Individual or groups?
3. **Study vs. Thing** - Study of the thing vs. the thing itself?
4. **Behavior vs. Attitudes** - What they do vs. what they think?
5. **Direction vs. Magnitude** - Which way vs. how much?
6. **Positive vs. Negative** - Good or bad connotation?
`,
  },

  // ============================================
  // MATH RESOURCES
  // ============================================
  {
    id: 'math-formulas',
    title: 'Essential Math Formulas',
    section: 'math',
    duration: 20,
    difficulty: 'essential',
    description: 'Key formulas and concepts you need to know for ACT Math.',
    content: `# Essential ACT Math Formulas

## Algebra

### Linear Equations
- Slope-intercept form: **y = mx + b**
- Point-slope form: **y - y₁ = m(x - x₁)**
- Standard form: **Ax + By = C**
- Slope: **m = (y₂ - y₁)/(x₂ - x₁)**

### Quadratic Equations
- Standard form: **ax² + bx + c = 0**
- Quadratic formula: **x = (-b ± √(b² - 4ac)) / 2a**
- Discriminant: **b² - 4ac**
  - If > 0: two real solutions
  - If = 0: one real solution
  - If < 0: no real solutions

### Exponents
- aᵐ × aⁿ = aᵐ⁺ⁿ
- aᵐ ÷ aⁿ = aᵐ⁻ⁿ
- (aᵐ)ⁿ = aᵐⁿ
- a⁰ = 1
- a⁻ⁿ = 1/aⁿ

---

## Geometry

### Triangles
- Area: **A = ½bh**
- Pythagorean theorem: **a² + b² = c²**
- Special right triangles:
  - 30-60-90: sides are x, x√3, 2x
  - 45-45-90: sides are x, x, x√2

### Circles
- Area: **A = πr²**
- Circumference: **C = 2πr = πd**
- Arc length: **(θ/360) × 2πr**
- Sector area: **(θ/360) × πr²**

### Rectangles & Squares
- Area of rectangle: **A = lw**
- Area of square: **A = s²**
- Perimeter of rectangle: **P = 2l + 2w**

### 3D Shapes
- Volume of rectangular solid: **V = lwh**
- Volume of cylinder: **V = πr²h**
- Volume of cone: **V = ⅓πr²h**
- Volume of sphere: **V = (4/3)πr³**
- Surface area of sphere: **SA = 4πr²**

---

## Trigonometry

### SOHCAHTOA
- **sin θ = opposite/hypotenuse**
- **cos θ = adjacent/hypotenuse**
- **tan θ = opposite/adjacent**

### Reciprocal Functions
- csc θ = 1/sin θ
- sec θ = 1/cos θ
- cot θ = 1/tan θ

### Key Values
| Angle | sin | cos | tan |
|-------|-----|-----|-----|
| 0° | 0 | 1 | 0 |
| 30° | 1/2 | √3/2 | √3/3 |
| 45° | √2/2 | √2/2 | 1 |
| 60° | √3/2 | 1/2 | √3 |
| 90° | 1 | 0 | undefined |

### Law of Sines
**a/sin A = b/sin B = c/sin C**

### Law of Cosines
**c² = a² + b² - 2ab cos C**

---

## Statistics & Probability

### Mean (Average)
**Mean = Sum of all values / Number of values**

### Median
Middle value when data is ordered. For even numbers, average the two middle values.

### Mode
Most frequently occurring value.

### Probability
**P(event) = favorable outcomes / total outcomes**

### Combinations & Permutations
- Permutations (order matters): **nPr = n!/(n-r)!**
- Combinations (order doesn't matter): **nCr = n!/[r!(n-r)!]**

---

## Coordinate Geometry

### Distance Formula
**d = √[(x₂ - x₁)² + (y₂ - y₁)²]**

### Midpoint Formula
**M = ((x₁ + x₂)/2, (y₁ + y₂)/2)**

### Equation of a Circle
**(x - h)² + (y - k)² = r²**
- Center: (h, k)
- Radius: r

---

## Functions

### Function Notation
- f(x) means "plug x into function f"
- f(g(x)) means "first apply g, then apply f"

### Domain & Range
- **Domain**: all possible x-values (inputs)
- **Range**: all possible y-values (outputs)

### Transformations
- f(x) + k → shifts up k
- f(x) - k → shifts down k
- f(x + h) → shifts left h
- f(x - h) → shifts right h
- -f(x) → reflects over x-axis
- f(-x) → reflects over y-axis

---

## Number Properties

### Divisibility Rules
- By 2: ends in even number
- By 3: sum of digits divisible by 3
- By 5: ends in 0 or 5
- By 9: sum of digits divisible by 9
- By 10: ends in 0

### Prime Numbers (first 10)
2, 3, 5, 7, 11, 13, 17, 19, 23, 29
`,
  },
  {
    id: 'math-strategies',
    title: 'Math Problem-Solving Strategies',
    section: 'math',
    duration: 15,
    difficulty: 'intermediate',
    description: 'Strategic approaches for tackling ACT Math questions efficiently.',
    content: `# ACT Math Problem-Solving Strategies

## The Four Dimensions of ACT Math

1. **Content Knowledge** - Do you know the math?
2. **Technique** - Can you apply the right approach?
3. **Speed** - Can you work fast enough?
4. **Accuracy** - Can you avoid careless mistakes?

---

## Strategy 1: Plugging In Numbers (PIN)

### When to Use
- Variables in the answer choices
- "What is the value of x in terms of y"
- Word problems with no specific numbers

### How to Do It
1. Choose easy numbers (like 2, 3, 5, 10)
2. Avoid 0 and 1 (too special)
3. Work through the problem with your numbers
4. Check which answer choice gives you the same result

### Example
"If x is a positive integer, which expression equals 2x + 4?"
- Let x = 3
- 2(3) + 4 = 10
- Check each answer with x = 3 to find which = 10

---

## Strategy 2: Backsolving

### When to Use
- Numerical answer choices
- "Find the value of x" type questions
- When algebra seems complicated

### How to Do It
1. Start with answer choice C (middle value)
2. Plug it back into the problem
3. If too big, try smaller; if too small, try bigger
4. You'll find the answer in 2-3 tries max

---

## Strategy 3: Eyeballing/Estimation

### When to Use
- Geometry problems with diagrams
- "Which is closest to..." questions
- When answers are spread far apart

### How to Do It
1. Use the diagram (if drawn to scale)
2. Estimate sizes, angles, lengths
3. Eliminate obviously wrong answers
4. Make an educated guess

### Caution
If the problem says "not drawn to scale," be careful!

---

## Strategy 4: Working Backwards

### When to Use
- Multi-step word problems
- When the end result is given

### How to Do It
1. Start with what you're looking for
2. Work backwards through the problem
3. Use the given information to check your work

---

## Calculator Strategies

### When to Use Calculator
- Long calculations
- Graphing to check intersections
- Checking work on algebra

### When NOT to Use Calculator
- Simple arithmetic (faster by hand)
- Conceptual questions
- When the numbers are clearly designed to simplify

### Calculator Tips
- Practice with YOUR calculator before test day
- Know where the functions are
- Use parentheses to avoid order of operations errors

---

## Time Management

### Question Distribution
- Questions 1-20: Easier (1 min each)
- Questions 21-40: Medium (1-1.5 min each)
- Questions 41-60: Harder (1.5-2 min each)

### If Stuck
- Skip and come back
- Make an educated guess
- Never leave blank!

---

## Common Careless Mistakes

1. **Sign errors** - Watch positive/negative
2. **Distribution errors** - Distribute to ALL terms
3. **Fraction errors** - Remember common denominators
4. **Unit conversions** - Check units match
5. **Reading errors** - Answer what they ASKED
6. **Calculator entry** - Double-check what you typed

### Prevention
- Read the question twice
- Underline what they're asking for
- Check your answer makes sense
- Re-read before moving on

---

## "When You See" Shortcuts

| When You See | Think |
|--------------|-------|
| Parallel lines | Alternate interior angles equal |
| Midpoint | Distance formula or average |
| "In terms of" | Plug in numbers |
| Remainder | Try actual division |
| Percent increase | New = Original × (1 + rate) |
| System of equations | Add/subtract or substitute |
`,
  },

  // ============================================
  // SCIENCE RESOURCES
  // ============================================
  {
    id: 'science-strategies',
    title: 'Science Section Strategies',
    section: 'science',
    duration: 15,
    difficulty: 'essential',
    description: 'How to approach ACT Science passages and questions effectively.',
    content: `# ACT Science Strategies

## The Truth About ACT Science

**It's NOT really a science test!**

ACT Science is primarily a test of:
- Reading comprehension
- Data interpretation
- Logical reasoning

You do NOT need to memorize scientific facts. Everything you need is in the passages.

---

## Passage Types

### 1. Data Representation (30-40%)
- Graphs, tables, and charts
- Focus on reading the data
- Questions ask you to interpret trends

### 2. Research Summaries (45-55%)
- Descriptions of experiments
- Multiple studies or experiments
- Compare methods and results

### 3. Conflicting Viewpoints (15-20%)
- Two or more scientists with different views
- Usually 1 passage per test
- Compare and contrast opinions

---

## General Strategy

### Step 1: Skim the Passage (30-60 seconds)
- Read intro paragraph
- Look at figures/tables
- Note what's being measured
- DON'T read every word

### Step 2: Go to the Questions
- Most answers are in the figures
- Read questions carefully
- Find the relevant data

### Step 3: Answer & Move On
- Don't overthink
- Trust the data
- Keep moving

---

## Reading Figures

### Tables
- Read column headers first
- Note units
- Look for patterns (increasing? decreasing?)

### Graphs
- Read axis labels and units
- Identify variables (x = independent, y = dependent)
- Note the scale
- Look for trends

### Key Questions
- What's being measured?
- What are the variables?
- What's the trend?
- Are there outliers?

---

## Question Types & Strategies

### Type 1: Find the Data
- Locate the right figure
- Find the specific value
- Answer directly from data

### Type 2: Identify Trends
- Look at the overall pattern
- Is it increasing, decreasing, or constant?
- Is the relationship direct or inverse?

### Type 3: Compare Experiments
- What's the same?
- What's different?
- Why did results differ?

### Type 4: Apply Information
- Use data to predict new scenarios
- Extend trends
- Apply scientific reasoning

### Type 5: Conflicting Viewpoints
- Understand each scientist's position
- Find where they agree/disagree
- Answer based on THEIR view, not yours

---

## Conflicting Viewpoints Strategy

### Step 1: Read the Introduction
- What's the question/debate?
- What are they trying to explain?

### Step 2: Read Scientist 1's View
- What do they believe?
- What's their main evidence?

### Step 3: Read Scientist 2's View
- What do they believe?
- How does it differ from Scientist 1?

### Step 4: Answer Questions
- "According to Scientist 1..." → Only use Scientist 1's info
- "Both scientists would agree..." → Find common ground
- "Which observation would weaken..." → Find contradicting evidence

---

## Time Management

- **6-7 passages** in **35 minutes**
- About **5 minutes per passage**
- 40 questions total

### Prioritize
1. Do Data Representation passages first (easiest)
2. Then Research Summaries
3. Save Conflicting Viewpoints for last (most reading)

### If Stuck
- Skip and come back
- Eliminate obviously wrong answers
- Make educated guess
- NEVER leave blank

---

## Common Mistakes to Avoid

1. **Reading too much** - Skim passages, focus on data
2. **Ignoring units** - Always check units!
3. **Wrong figure** - Make sure you're looking at the right one
4. **Overthinking** - The answer is usually straightforward
5. **Outside knowledge** - Only use what's in the passage
6. **Rushing Conflicting Viewpoints** - This passage type requires more reading

---

## Quick Reference: What to Look For

| In Tables | In Graphs |
|-----------|-----------|
| Column headers | Axis labels |
| Row labels | Units |
| Units | Scale |
| Trends in columns | Shape of curve |
| Patterns across rows | Intersections |
`,
  },

  // ============================================
  // GENERAL RESOURCES
  // ============================================
  {
    id: 'test-day-tips',
    title: 'Test Day Tips',
    section: 'general',
    duration: 10,
    difficulty: 'essential',
    description: 'Everything you need to know for a successful ACT test day.',
    content: `# Test Day Tips

## Before Test Day

### The Night Before
- Get 8 hours of sleep
- Prepare your bag the night before
- Set multiple alarms
- Don't cram—light review only

### What to Bring
- **Admission ticket** (printed)
- **Photo ID** (school ID or driver's license)
- **#2 pencils** (bring 4-5 sharpened)
- **Calculator** (approved model with fresh batteries)
- **Watch** (no smartwatches)
- **Snacks** for break
- **Water**

### What NOT to Bring
- Cell phone (or turn OFF and put away)
- Smartwatch or fitness tracker
- Notes or books
- Highlighters or colored pencils

---

## Test Day Morning

### Timing
- Arrive 30 minutes early
- Check-in takes time
- Find your room calmly

### Breakfast
- Eat a good breakfast
- Protein + complex carbs
- Avoid too much sugar
- Stay hydrated

---

## During the Test

### Pacing
| Section | Questions | Time | Pace |
|---------|-----------|------|------|
| English | 75 | 45 min | 36 sec each |
| Math | 60 | 60 min | 1 min each |
| Reading | 40 | 35 min | 52 sec each |
| Science | 40 | 35 min | 52 sec each |

### Time Checks
- Wear a watch
- Check time every 10-15 questions
- Know when to move on

### Answer Sheet Tips
- Fill bubbles completely
- Erase completely if changing
- Check that your answers line up with question numbers
- Never leave blanks (no penalty for guessing!)

---

## Section-Specific Tips

### English
- Read the whole sentence before answering
- Check surrounding sentences for context
- Shorter is often better (economy rule)
- Watch for comma splices

### Math
- Show your work
- Use your calculator wisely
- Plug in answers when stuck
- Draw diagrams for geometry

### Reading
- Do line-number questions first
- Read actively, not passively
- Eliminate extreme answers
- Don't bring outside knowledge

### Science
- Don't read every word
- Go straight to the figures
- Answer from the data
- Save Conflicting Viewpoints for last

---

## Mental Strategies

### Stay Calm
- Take deep breaths
- Positive self-talk
- Focus on one question at a time
- Don't panic if you skip questions

### When Stuck
- Skip and come back
- Eliminate what you can
- Make an educated guess
- Move on quickly

### During Breaks
- Use the bathroom
- Eat a light snack
- Drink water
- Stretch
- Don't discuss answers with others

---

## After the Test

- Celebrate! You did it!
- Don't obsess over answers
- Scores come in 2-3 weeks
- Consider retaking if needed

---

## Emergency Situations

### Running Out of Time
- Make sure EVERY question is answered
- Guess on remaining questions (pick one letter and stick with it)
- Never leave blanks!

### Lost Your Place
- Stop and carefully realign
- Count question numbers
- Don't rush—accuracy matters

### Don't Understand a Question
- Re-read carefully
- Look for key words
- Eliminate obviously wrong answers
- Make your best guess and move on
`,
  },
  {
    id: 'careless-mistakes',
    title: 'Avoiding Careless Mistakes',
    section: 'general',
    duration: 8,
    difficulty: 'essential',
    description: 'Learn to identify and prevent common careless errors that cost points.',
    content: `# Avoiding Careless Mistakes

## Why Careless Mistakes Happen

1. **Rushing** - Going too fast
2. **Fatigue** - Getting tired
3. **Overconfidence** - Not checking work
4. **Misreading** - Not reading carefully
5. **Anxiety** - Test stress

---

## Common Mistake Categories

### Reading Mistakes
- Not reading the whole question
- Missing key words like "NOT" or "EXCEPT"
- Answering a different question than asked
- Skipping important context

### Calculation Mistakes
- Sign errors (positive/negative)
- Order of operations errors
- Decimal point errors
- Forgetting to carry/borrow

### Transfer Mistakes
- Bubbling wrong answer
- Skipping a line on answer sheet
- Writing answer for wrong question
- Copying numbers incorrectly

### Conceptual Mistakes
- Using wrong formula
- Forgetting a step
- Making wrong assumptions
- Confusing similar concepts

---

## Prevention Strategies

### Before Answering
1. **Read the question twice**
2. **Underline key words** (NOT, LEAST, EXCEPT)
3. **Identify what they're asking for**
4. **Check units**

### While Working
1. **Write neatly**
2. **Show all steps**
3. **Double-check calculations**
4. **Box your final answer**

### After Answering
1. **Re-read the question**
2. **Verify your answer makes sense**
3. **Check you answered what was asked**
4. **Bubble carefully**

---

## Section-Specific Mistakes

### English
| Mistake | Prevention |
|---------|------------|
| Missing comma splices | Check for two complete sentences |
| Wrong pronoun | Find the antecedent |
| Redundancy | Read for repeated ideas |
| Wrong tone | Match the passage style |

### Math
| Mistake | Prevention |
|---------|------------|
| Sign errors | Write each step clearly |
| Forgot negative | Check both solutions |
| Wrong formula | Double-check before using |
| Unit conversion | Label all units |

### Reading
| Mistake | Prevention |
|---------|------------|
| Extreme answers | Watch for "always," "never" |
| Wrong part of passage | Use line numbers |
| Personal opinion | Only use passage info |
| Partially right | Check entire answer |

### Science
| Mistake | Prevention |
|---------|------------|
| Wrong figure | Check figure number |
| Wrong units | Read axis labels |
| Misread trend | Look at full range |
| Outside knowledge | Stick to the data |

---

## The "Check" Habit

Train yourself to check every answer:

**C** - Calculation correct?
**H** - Have I answered what was asked?
**E** - Eliminated careless errors?
**C** - Correct bubble filled?
**K** - Key words accounted for?

---

## Time vs. Accuracy Trade-off

### Don't Rush
- Accuracy beats speed
- One careful pass > two rushed passes
- Build in checking time

### When to Move On
- If stuck for more than 90 seconds
- If you've checked twice
- If you're guessing anyway

### Recovery Strategy
If you realize you made a mistake:
1. Don't panic
2. Fix it carefully
3. Move on—don't dwell
4. Trust your preparation

---

## Building Good Habits

### Practice Tests
- Practice under test conditions
- Review EVERY mistake
- Categorize your errors
- Track patterns

### Error Log
Keep track of:
- What type of mistake
- What section
- What caused it
- How to prevent it

### Self-Talk
Replace:
- "I always mess up" → "I can improve"
- "This is too hard" → "I'll work through it"
- "I'm running out of time" → "I'll stay focused"
`,
  },
];

// Export categories for each resource type
export const getResourcesBySection = (section) => {
  if (section === 'all') return resources;
  return resources.filter(r => r.section === section);
};
