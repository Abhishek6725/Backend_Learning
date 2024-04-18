try{
    throw new error("An error");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Cleanup code");
}