export class Question {
    public readonly question: string;
    public readonly answer: string;
    public readonly ID: number;
    public readonly modulNr: number;
    public rating = 0;

    private static IDCounter = 0;
    private readonly LS_KEY: string;

    constructor(modulNr: number, question: string, answer: string) {
        this.question = question;
        this.answer = answer;
        this.ID = Question.IDCounter++;
        this.LS_KEY = `question-${this.ID}-rating`;
        this.rating = this.getRating();
        this.modulNr = modulNr;
    }

    public rateUp() {
        this.rating++;
        localStorage.setItem(this.LS_KEY, this.rating.toString());
    }

    public rateDown() {
        this.rating--;
        console.log(this.rating);
        localStorage.setItem(this.LS_KEY, this.rating.toString());
    }

    private getRating() {
        const rating = localStorage.getItem(this.LS_KEY);
        return rating ? parseInt(rating, 10) : 0;
    }
}

export function getAllQuestions() {
    return [
        new Question(
            0,
            'Name several applications of probability in technical or practical computer science!',
            'Hazards in circuits, error correcting codes, caching, fault tree analysis, randomized algorithms, Bayesian optimization, compression algorithms, probabilistic bug finding techniques.'
        ),
        new Question(
            0,
            'What is Deep Variability?',
            'Variability in deep software layers due to differences in data, style, compiler, hardware, and execution environments.'
        ),
        new Question(
            0,
            'What is aleatoric uncertainty?',
            'Inherent unpredictability due to randomness, such as noise in data, network delays, or hardware variability.'
        ),
        new Question(
            0,
            'What causes epistemic uncertainty?',
            'Lack of knowledge or incomplete understanding, such as misunderstandings of user needs, differences in programming language semantics, or unknown system behaviors.'
        ),
        new Question(
            0,
            'Why use probabilities?',
            'Probabilities help quantify uncertainty, analyze system performance, improve decision-making, and develop probabilistic models for AI, security, and optimization.'
        ),

        new Question(
            1,
            'What is a random variable?',
            'A variable whose value is determined by chance.'
        ),
        new Question(
            1,
            'How does the CDF relate to the PDF / PMF?',
            'The CDF gives the probability that a variable takes a value less than or equal to a given value. It integrates the PDF for continuous distributions or sums the PMF for discrete distributions.'
        ),
        new Question(
            1,
            'What is an important property of the expectation?',
            'Expectation is linear: E[aX + b] = aE[X] + b.'
        ),
        new Question(
            1,
            'What is the standardized centered second moment of any distribution?',
            'It is the variance of the distribution.'
        ),
        new Question(
            1,
            'What does the standard deviation measure?',
            'It measures the spread or dispersion of a distribution.'
        ),
        new Question(
            1,
            'What is the relation between the standard deviation and the variance?',
            'The standard deviation is the square root of the variance.'
        ),
        new Question(
            1,
            'What does the skewness measure?',
            'Skewness measures the asymmetry of a probability distribution.'
        ),
        new Question(
            1,
            'What is the value of the skewness of a symmetric distribution?',
            '0.'
        ),
        new Question(
            1,
            'What does the kurtosis measure?',
            'Kurtosis measures the “tailedness” of a probability distribution.'
        ),
        new Question(
            1,
            'When does the mean equal the median?',
            'When the distribution is symmetric.'
        ),
        new Question(
            1,
            'What are the modes of a distribution?',
            'Modes are values with the greatest density or probability, represented as peaks in the distribution.'
        ),

        new Question(
            2,
            'What is Information?',
            'Information quantifies the reduction in uncertainty when an event occurs.'
        ),
        new Question(
            2,
            'What is the difference between information and data?',
            'Data consists of raw symbols, while information is the meaningful interpretation that reduces uncertainty.'
        ),
        new Question(
            2,
            'What are the properties of an information source?',
            'An information source consists of a finite set of messages, each with a probability of occurrence.'
        ),
        new Question(
            2,
            'What is entropy in information theory?',
            'Entropy measures the average uncertainty or information content in a probability distribution.'
        ),
        new Question(
            2,
            'What is a channel?',
            'A channel is a medium through which information is transmitted from a source to a receiver, possibly with noise.'
        ),
        new Question(
            2,
            'How do the two discussed channel types differ?',
            'A Binary Symmetric Channel (BSC) introduces random bit flips, while a Binary Erasure Channel (BEC) erases bits without replacing them.'
        ),
        new Question(
            2,
            'What is the channel capacity?',
            'The maximum rate at which information can be transmitted through a noisy channel with arbitrarily small error probability.'
        ),
        new Question(
            2,
            'Why are we using coding schemes?',
            'Coding schemes introduce redundancy to detect and correct errors in noisy communication channels.'
        ),
        new Question(
            2,
            'What are practical applications of information theory?',
            'Data compression, cryptography, machine learning, neuroscience, and telecommunications.'
        ),
        new Question(
            2,
            'What is a divergence?',
            'A measure of how one probability distribution differs from another, commonly used in statistical and machine learning applications.'
        ),
        new Question(
            2,
            'What are the properties of the KL?',
            'KL divergence is non-negative, asymmetric, and measures the information loss when approximating one distribution with another.'
        ),
        new Question(
            3,
            'How does the binomial distribution relate to the Bernoulli distribution?',
            'The binomial distribution models the number of successes in a fixed number of independent Bernoulli trials.'
        ),
        new Question(
            3,
            'How does the Poisson distribution relate to the binomial distribution?',
            'The Poisson distribution is the limit of the binomial distribution when the number of trials is large and the probability of success is small.'
        ),
        new Question(
            3,
            'What is the change-of-variables formula? When can you apply it?',
            'The change-of-variables formula transforms the probability density function of a random variable under a function. It can be applied when the transformation function is differentiable and invertible.'
        ),
        new Question(
            3,
            'How can you compute the distribution of the sum of two random variables?',
            'By convolving their probability density functions if they are independent.'
        ),
        new Question(
            3,
            'Why is the normal distribution important? How can you derive it?',
            'The normal distribution is important because of the Central Limit Theorem, which states that the sum of independent random variables tends to follow a normal distribution.'
        ),
        new Question(
            3,
            'What is a maximum entropy distribution? How can you include a prior?',
            'A maximum entropy distribution is the one that maximizes entropy subject to given constraints. A prior can be included by minimizing the relative entropy (Kullback-Leibler divergence) to the prior distribution.'
        ),
        new Question(
            3,
            'What is a mixture of Gaussians? What is a latent variable?',
            'A mixture of Gaussians is a probability distribution composed of multiple weighted Gaussian distributions. A latent variable is an unobserved variable that determines which Gaussian component a data point belongs to.'
        ),
        new Question(
            3,
            'What is the difference between parametric and non-parametric models?',
            'Parametric models have a fixed number of parameters, while non-parametric models have an infinite or flexible number of parameters that grow with the data.'
        ),
        new Question(
            3,
            'In kernel density estimation, which influence has the bandwidth parameter?',
            'The bandwidth parameter controls the smoothness of the density estimate, with larger values leading to smoother distributions and smaller values capturing finer details.'
        ),

        new Question(
            4,
            'With which density estimation techniques do you obtain a point estimate?',
            'Maximum Likelihood Estimation (MLE) and Maximum A-Posteriori (MAP)'
        ),
        new Question(
            4,
            'For which prior distribution does the Maximum A-Posteriori estimate equal the Maximum Likelihood Estimate?',
            'A uniform prior distribution'
        ),
        new Question(
            4,
            'What is the connection between Least Squares Regression and Maximum Likelihood Regression? Why is Maximum Likelihood Regression more powerful?',
            'Least Squares Regression is equivalent to Maximum Likelihood Regression under the assumption of Gaussian noise. Maximum Likelihood Regression is more powerful because it also estimates the noise variance, allowing for uncertainty quantification.'
        ),
        new Question(
            4,
            'How can you prevent overfitting of Polynomial Regression?',
            'By using regularization techniques such as Ridge Regression (L2 regularization) or by reducing the polynomial degree.'
        ),
        new Question(
            4,
            'How does model complexity change, if you increase λ in ridge regression? Why?',
            'Increasing λ in Ridge Regression reduces model complexity by shrinking coefficient values, preventing overfitting and making the model more stable.'
        ),
        new Question(
            4,
            'How can we classify non-linear separable data using logistic regression?',
            'By introducing non-linear features using basis functions or kernel methods, transforming the feature space to make the data linearly separable.'
        ),
        new Question(
            4,
            'What is the intuition behind the expectation step of the EM algorithm? Please explain without using any equations.',
            'In the expectation step, we estimate the missing or hidden data by computing the probabilities of assignments based on current model parameters. This helps in refining our understanding of which data points belong to which underlying components before updating model parameters in the next step.'
        ),
        new Question(
            5,
            'What are experiments good for?',
            'Experiments help understand cause-and-effect relationships by deliberately changing input variables and observing their impact. They are useful for factor screening, optimization, confirmation, discovery, and robustness testing.'
        ),
        new Question(
            5,
            'What are common design factors, controllable variables, and uncontrollable variables in machine learning applications?',
            'Design factors include model choice and feature functions. Controllable variables include the choice of training and evaluation data. Uncontrollable variables include sources of uncertainty such as noise and unknown knowns.'
        ),
        new Question(
            5,
            'What is Occam`s razor?',
            'Occam`s razor states that the simplest model that fits the data should be preferred. It emphasizes minimizing model complexity to avoid overfitting.'
        ),
        new Question(
            5,
            'Why do we need to split our data into training, validation and test sets?',
            'Splitting data into training, validation, and test sets ensures proper model evaluation. The training set is used to fit the model, the validation set helps select the best model or parameters, and the test set estimates final performance.'
        ),
        new Question(
            5,
            'What is aleatoric and epistemic uncertainty?',
            'Aleatoric uncertainty arises from inherent randomness in data, while epistemic uncertainty results from a lack of knowledge about the system, which can be reduced with more data.'
        ),
        new Question(
            5,
            'What is the bias-variance tradeoff?',
            'The bias-variance tradeoff represents the balance between underfitting and overfitting. High bias leads to underfitting (oversimplification), while high variance leads to overfitting (model too sensitive to noise). The goal is to find a balance that minimizes total error.'
        ),

        new Question(
            6,
            'What is the difference between the weak and strong law of large numbers?',
            'The weak law ensures probabilistic convergence, meaning the probability of a large deviation from the true mean decreases with sample size. The strong law guarantees almost sure convergence, meaning the sample average will eventually equal the expected value as the sample size approaches infinity.'
        ),

        new Question(
            6,
            'How does the sample size effect the convergence rate of Monte Carlo algorithms?',
            'The convergence rate follows the Central Limit Theorem, decreasing proportionally to 1/sqrt(N), where N is the sample size. Increasing the sample size reduces variance and improves accuracy.'
        ),

        new Question(
            6,
            'How does a pseudo-random number generator differ from a true random number generator?',
            'A pseudo-random number generator (PRNG) uses deterministic algorithms to generate sequences that appear random but are fully reproducible with the same seed, whereas a true random number generator (TRNG) derives randomness from physical sources such as atmospheric noise.'
        ),

        new Question(
            6,
            'What advantage do quasi-random number generators have over pseudo-random generators?',
            'Quasi-random number generators (QRNGs) provide better uniform coverage of the sample space, reducing variance and improving convergence rates, which makes them advantageous for numerical integration and low-discrepancy sampling applications.'
        ),

        new Question(
            6,
            'How is the inverse CDF method used in sampling?',
            'The inverse CDF method transforms uniform random numbers into samples from a desired distribution by applying the inverse cumulative distribution function (CDF). This works efficiently when the inverse CDF is analytically available.'
        ),

        new Question(
            6,
            'How does rejection and importance sampling work?',
            'Rejection sampling draws samples from a proposal distribution and accepts or rejects them based on a probability criterion, making it inefficient if many samples are rejected. Importance sampling re-weights samples from a proposal distribution to approximate expectations, improving efficiency by utilizing all generated samples.'
        ),

        new Question(
            6,
            'How does Metropolis-Hastings algorithm work and what is the difference to direct/rejection or importance sampling?',
            'The Metropolis-Hastings algorithm constructs a Markov Chain that converges to the target distribution by proposing new samples and accepting or rejecting them based on an acceptance ratio. Unlike direct sampling, which requires an inverse CDF, and rejection/importance sampling, which rely on a well-chosen proposal distribution, Metropolis-Hastings enables sampling from complex distributions by iteratively refining the sample set through a Markov Chain.'
        ),
        new Question(
            7,
            'Why is it important to consider uncertainty in decision making?',
            'Uncertainty impacts efficiency, safety, and reliability. Poor handling can lead to wasted resources, increased risks, and reduced trust in AI systems.'
        ),
        new Question(
            7,
            'What are multi-armed bandits?',
            'Multi-armed bandits are a class of decision problems where an agent chooses among different actions (arms) to maximize cumulative rewards while balancing exploration and exploitation.'
        ),
        new Question(
            7,
            'What challenges of global optimization is Bayesian optimization (decision making) trying to solve?',
            'Bayesian optimization addresses challenges like unexplored search space, unknown objective functions, and expensive function evaluations by using probabilistic models to guide sampling efficiently.'
        ),
        new Question(
            7,
            'What approaches can be used for the surrogate model in Bayesian optimization?',
            'Common approaches include Gaussian Processes, Bayesian linear regression, and other probabilistic models that estimate the objective function with uncertainty quantification.'
        ),
        new Question(
            7,
            'What is the exploration-exploitation trade-off?',
            'The exploration-exploitation trade-off is the balance between exploring new options to gain knowledge and exploiting known options to maximize immediate rewards.'
        ),
        new Question(
            7,
            'What is the advantage of Dynamic Programming in comparison to search methods like Breadth-First Search or Depth-First Search?',
            'Dynamic Programming efficiently solves problems with overlapping subproblems and optimal substructure, while search methods often require replanning and do not store intermediate results.'
        ),
        new Question(
            7,
            'What problems of Dynamic Programming is Reinforcement Learning trying to solve?',
            'Reinforcement Learning addresses scenarios where transition dynamics and reward functions are unknown, requiring the agent to learn optimal policies through exploration and experience.'
        ),
    ];
}

export function getRandomizedQuestions() {
    let q = shuffleArray(getAllQuestions());
    q = q.sort((a, b) => a.rating - b.rating);
    return q;
}

function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }
    return shuffledArray;
}

export function getAvgRating(questions: Question[]) {
    const total = questions.reduce((acc, q) => acc + q.rating, 0);
    const r = total / questions.length;
    return r.toFixed(2);
}
